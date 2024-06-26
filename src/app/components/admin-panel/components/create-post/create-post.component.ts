import { Component, Input, OnInit } from '@angular/core';
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
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ApiService } from '../../../../core/api/api.service';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { EMPTY, Subscription, finalize, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatDatepickerModule, MatProgressBarModule, ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  providers: [provideNativeDateAdapter(), DatePipe]
})
export class CreatePostComponent implements OnInit {

  @Input()

  ngOnInit() {
    this.postForm.get('date')?.disable();
  }

  postForm: FormGroup;
  currentDate: string;

  requiredFileType: string = 'image/png, image/jpg';

  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription | null = null;
  uploadedImageLink: string | null = null;
  selectedFile: File | null = null;
  imageId: any;

  constructor(private datePipe: DatePipe, public dialog: MatDialog, public api: ApiService, private http: HttpClient) { 

    const transformedDate = this.datePipe.transform(new Date(), 'dd.MM.yyyy');
    this.currentDate = transformedDate ? transformedDate : '';

    this.postForm = new FormGroup({
      date: new FormControl(),
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      loadImg: new FormControl()
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      data: { title: this.postForm.value.title, text: this.postForm.value.text, imgId: this.imageId },
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  // Загрузка изображений
  onFileSelected(event: any) {
    const headers = { 'Authorization': 'BEARER ' + localStorage.getItem('token') };
    this.selectedFile = event.target.files[0];

    const created = new Date();

    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
  
      this.base64(this.selectedFile, (coolFile) => {
        const file = coolFile.base64;
  
        this.uploadSub = this.http.post('http://localhost:8000/images', { file, created }, {
          reportProgress: true,
          observe: 'events',
          headers
        })
        .pipe(
          switchMap((event: HttpEvent<any>) => {
            if (event.type === HttpEventType.UploadProgress) {
              if (event.total) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            } else if (event.type === HttpEventType.Response) {
              this.imageId = event.body.id;
              return of(this.imageId);
            }
            return EMPTY;
          })
        )
        .subscribe(
          (imageId) => {
            console.log('Image ID IMG:', imageId); 
          },
          (error) => {
            console.error('Error uploading image:', error); 
          }
        );
      });
    }
  }

  
  base64(file: File, callback: (coolFile: any) => void) {
    const coolFile = {
      base64: '',
      filetype: '',
      size: 0,
      filename: ''
    };
  
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        const base64 = btoa(e.target.result as string);
        coolFile.base64 = base64;
        coolFile.filetype = file.type;
        coolFile.size = file.size;
        coolFile.filename = file.name;
        callback(coolFile);
      } else {
        console.error("Error reading file: e.target is null");
      }
    };
  
    reader.readAsBinaryString(file);
  }

  cancelUpload() {
    this.uploadSub?.unsubscribe();
    this.reset();

    if (this.imageId) {
      this.api.deleteImage(this.imageId).subscribe(
        () => {
          console.log('IMG удален:', this.imageId);
          this.imageId = null;
        },
        (error) => {
          console.error('Ошибка при удалении изображения:', error);
        }
      );
    }
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = null;
    this.fileName = '';
  }

}

@Component({
  selector: 'create-posts',
  templateUrl: 'create-posts.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, CommonModule],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public api: ApiService, private dialog: MatDialog) { }

  deleteImg() {
    if (this.data.imgId) {
      this.api.deleteImage(this.data.imgId).subscribe(
        () => {
          console.log('IMG удален:', this.data.imgId);
          this.data.imgId = null;
        });
    }
  }

  createPost(title: string, text: string, imgId: number) {
    this.api.createPost(title, text, imgId).subscribe(
      () => {

        const newDialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
          data: {loadCreatePost: true },
          width: '250px'
        });

        setTimeout(() => {
          newDialogRef.close();
        }, 1000);
      }
    );
  }
}