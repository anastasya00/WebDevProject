import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../core/models/models';
import { ApiService } from '../../../../core/api/api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.css'
})
export class DeletePostComponent {

  posts: Post[] = [];
  filteredPosts!: Post[];
  searchForm!: FormGroup;

  constructor(public api: ApiService, public dialog: MatDialog) {
    this.api.getPosts().subscribe(posts => {
      this.posts = posts;
      this.filteredPosts = this.posts;
      for (let post of this.posts) {
        this.api.getPostImages(post.id).subscribe(images => {
          post.images = images;
        });
      }
    });

    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }

  public searchPosts(value: string) {
    this.filteredPosts = this.posts.filter(post =>
					post?.content.toLowerCase().includes(value.toLowerCase())
				);
  }

  openDialog(postId: number, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      data: { postId, api: this.api },
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'confirmation-post-deletion',
  templateUrl: 'confirmation-post-deletion.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public api: ApiService) {}
  
  DeletePost(postId: number) {
    this.api.getPostImages(postId).subscribe(images => {
      if (images) {

      this.api.deleteImagesFromPost(postId).subscribe(() => {
        console.log('Изображения удалены');
        this.api.deletePost(postId).subscribe(() => {
          console.log('Пост удален');
          window.location.reload();
        });
      });

    } else {

      this.api.deletePost(postId).subscribe(() => {
        console.log('Пост удален');
        window.location.reload();
      });
      }
    });
  }
}  

