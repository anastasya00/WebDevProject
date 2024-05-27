import { Injectable } from '@angular/core';
import { Img, Post } from '../models/models';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backend_url: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.backend_url + 'posts').pipe(
      map(response => response.content)
    );
  }

  public getImages(): Observable<Img[]> {
    return this.http.get<any>(this.backend_url + 'images').pipe(
      map(response => response.content)
    );
  }

  public getPostImages(postId: number): Observable<Img[]> {
    const url = `http://localhost:8000/posts/${postId}/images`;
    return this.http.get<any>(url).pipe(
      map(response => response.content)
    );
  }

  public DeletePost(postId: number): Observable<any> {
    const postUrl = `http://localhost:8000/posts/${postId}`;
    const imagesUrl = `http://localhost:8000/posts/${postId}/images`

    const deletePostRequest = this.http.delete<any>(postUrl);
    const deleteImagesRequest = this.http.delete<any>(imagesUrl);

    return forkJoin([deletePostRequest, deleteImagesRequest]);
  }

}
