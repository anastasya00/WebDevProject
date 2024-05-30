import { Injectable } from '@angular/core';
import { Img, Post } from '../models/models';
import { Observable, from, map, mergeMap, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backend_url: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

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
  public deleteImage(imageId: number): Observable<any> {
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
    return this.http.post(this.backend_url + 'posts', { title, content, created })
      .pipe(
        switchMap((response: any) => {
          const postId = response.id; 
          
          return this.http.post(`http://localhost:8000/posts/${postId}/images/${imgId}`, {}); 
        })
      );
  }

  // Редактирование постов
  // public editPost(date: string, title: string, content: string): Observable<any> {
    
  // }

}
