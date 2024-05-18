import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Post {
  id: number;
  title: string;
  content: string;
  created: string;
  images: Img[];
}

interface Img {
  id: number;
  link: string;
  created: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private url_post = 'http://localhost:8000/posts';
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPosts().subscribe(posts => {
      this.posts = posts;
      for (let post of this.posts) {
        this.getPostImages(post.id).subscribe(images => {
          post.images = images;
        });
      }
    });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.url_post).pipe(
      map(response => response.content)
    );
  }

  getPostImages(postId: number): Observable<Img[]> {
    const url = `http://localhost:8000/posts/${postId}/images`;
    return this.http.get<any>(url).pipe(
      map(response => response.content)
    );
  }
  
}
