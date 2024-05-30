import { Injectable } from '@angular/core';
import { Img, Post } from '../models/models';
import { Observable, from, map, switchMap } from 'rxjs';
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

  // Связывание постов с изображениями по id
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

  // Создание постов
  public createPost(created: string, title: string, content: string): Observable<any> {
    return this.http.post(this.backend_url + 'posts', { title, content, created });
  }

  // Редактирование постов
  // public editPost(date: string, title: string, content: string): Observable<any> {
    
  // }

}
