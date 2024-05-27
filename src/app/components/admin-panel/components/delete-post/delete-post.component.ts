import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../core/models/models';
import { ApiService } from '../../../../core/api/api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.css'
})
export class DeletePostComponent implements OnInit {

  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchForm!: FormGroup;


  constructor(private api: ApiService) { }

  public searchPosts(value: string) {
    this.filteredPosts = this.posts.filter(post =>
					post?.content.toLowerCase().includes(value.toLowerCase())
				);
  }

  ngOnInit(): void {
    this.api.getPosts().subscribe(posts => {
      this.posts = posts;
      for (let post of this.posts) {
        this.api.getPostImages(post.id).subscribe(images => {
          post.images = images;
        });
      }
    });

    this.searchForm = new FormGroup({
      search: new FormControl()
    });

    this.filteredPosts = this.posts;
    
  }

}
