import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Img, Post } from '../../../../core/models/models';
import { ApiService } from '../../../../core/api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.css'
})
export class DeletePostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPosts().subscribe(posts => {
      this.posts = posts;
      for (let post of this.posts) {
        this.api.getPostImages(post.id).subscribe(images => {
          post.images = images;
        });
      }
    });
  }

}
