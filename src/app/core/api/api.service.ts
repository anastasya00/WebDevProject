import { Injectable } from '@angular/core';
import { Img, Post } from '../models/models';
import { Observable, catchError, concatMap, from, map, mergeMap, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs';
import { tap } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backend_url: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  postID: any;

  // Запрос на получение постов
  public getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.backend_url + 'posts').pipe(
      map(response => response.content)
    );
  }

  // Запрос на получение изображений
  public getImages(): Observable<Img[]> {
    return this.http.get<any>(this.backend_url + 'images').pipe(
      map(response => response.content)
    );
  }

  // Получение постов с изображениями по id
  public getPostImages(postId: number): Observable<Img[]> {
    const url = `http://localhost:8000/posts/${postId}/images`;
    return this.http.get<any>(url).pipe(
      map(response => response.content)
    );
  }

  // Удаление постов
  public deletePost(postId: number): Observable<any> {
    const postUrl = `http://localhost:8000/posts/${postId}`;

    return this.http.delete<any>(postUrl).pipe(
      map(response => response.content)
    );
  }

  // Удаление изображений, связанных с постом
  public deleteImagesFromPost(postId: number): Observable<any> {
    return this.getPostImages(postId).pipe(
      mergeMap(images => {
        return from(images).pipe(
          mergeMap(image => this.deleteImage(image.id))
        );
      })
    );
  }

  // Удаление отдельного изображения
  deleteImage(imageId: number): Observable<any> {
    console.log('deleteImage вызвана для imageId:', imageId);
  
    const imageUrl = `http://localhost:8000/images/${imageId}`;
    return this.http.delete<any>(imageUrl).pipe(
      map(response => response.content)
    )
  }

  // Получение поста по ID
  public getPost(postId: number): Observable<any> {
    const postUrl = `http://localhost:8000/posts/${postId}`;
    return this.http.get<Post>(postUrl).pipe(
      map(response => response.content)
    );
  }

  // Создание постов
  public createPost(title: string, content: string, created: string, imgId: number): Observable<any> {
    if (imgId != 0) {
      return this.http.post(this.backend_url + 'posts', { title, content, created })
      .pipe(
        switchMap((response: any) => {
          const postId = response.id; 
          
          return this.http.post(`http://localhost:8000/posts/${postId}/images/${imgId}`, {}); 
        })
      );
    }
    else {
      return this.http.post(this.backend_url + 'posts', { title, content, created })
        .pipe(
          catchError(error => {
            console.error('Error creating post:', error);
            return of(null);
          })
        );
    } 
  }

  // Редактирование постов
  public editPost(date: string, title: string, content: string, postId: number): Observable<any> {
    return new Observable(observer => {
      let imageIds: number[] = [];
  
      this.getPostImages(postId).pipe(
        mergeMap((images: any[]) => {
          imageIds = images.map((image: any) => image.id);
          return this.deletePost(postId);
        }),
        finalize(() => {
          console.log('Пост удален');
          this.createPost(title, content, date, 0).pipe(
            switchMap((response: any) => { 
              console.log('ID нового поста:', response.id);
              return from(imageIds).pipe(
                mergeMap(imageId => {
                  return this.http.post(`http://localhost:8000/posts/${response.id}/images/${imageId}`, {});
                }),
                finalize(() => {
                  console.log('Пост пересоздан');
                  console.log('IDs изображений:', imageIds);
                  window.location.reload();
                  this.postID = null;
                })
              );
            })
          ).subscribe();
        })
      ).subscribe();
    });
  }

}
