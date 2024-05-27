import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatDatepickerModule, MatProgressBarModule],
  providers: [provideNativeDateAdapter(), DatePipe]
})
export class CreatePostComponent {
  currentDate: string;

  constructor(private datePipe: DatePipe) {
    const transformedDate = this.datePipe.transform(new Date(), 'dd.MM.yyyy');
    this.currentDate = transformedDate ? transformedDate : '';
  }
  
}
