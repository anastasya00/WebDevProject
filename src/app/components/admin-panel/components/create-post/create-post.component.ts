import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from '../../../../core/api/api.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatDatepickerModule, MatProgressBarModule, ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule],
  providers: [provideNativeDateAdapter(), DatePipe]
})
export class CreatePostComponent implements OnInit {

  ngOnInit() {
    this.postForm.get('date')?.disable();
  }

  postForm: FormGroup;
  currentDate: string;

  constructor(private datePipe: DatePipe, public dialog: MatDialog, public api: ApiService) {

    const transformedDate = this.datePipe.transform(new Date(), 'dd.MM.yyyy');
    this.currentDate = transformedDate ? transformedDate : '';

    this.postForm = new FormGroup({
      date: new FormControl(),
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required])
    });
  }

  openDialog(dateTime: string, postTitle: string, postText: string, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      data: { date: dateTime, title: postTitle, text: postText },
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }  
}

@Component({
  selector: 'create-posts',
  templateUrl: 'create-posts.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public api: ApiService) { }

  CreatePost(date: string, title: string, text: string) {
    this.api.createPost(date, title, text);
  }
  
}
