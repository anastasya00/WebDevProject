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

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  }

@Component({
  selector: 'edit-post',
  templateUrl: 'edit-post.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
