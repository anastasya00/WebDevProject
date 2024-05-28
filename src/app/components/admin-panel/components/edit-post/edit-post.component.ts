import { Component, Inject, OnInit } from '@angular/core';
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
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchForm!: FormGroup;

  constructor(private api: ApiService, public dialog: MatDialog) { }

  public searchPosts(value: string) {
    this.filteredPosts = this.posts.filter(post =>
					post?.content.toLowerCase().includes(value.toLowerCase())
				);
  }

  ngOnInit(): void {
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

  openDialog(post: Post, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      data: { post: post },
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cancelEdit(post);
      } else {
        this.savePost(post);
      }
    });
  }

  editPost(post: Post): void {
    post.isEditing = true;
  }

  savePost(post: Post): void {
    post.isEditing = true;
  }

  cancelEdit(post: Post): void {
    post.isEditing = false;
  }

}

@Component({
  selector: 'edit-post',
  templateUrl: 'edit-post.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  cancel(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    this.dialogRef.close(true);
  }
}
