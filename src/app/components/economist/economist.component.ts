import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-economist',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './economist.component.html',
  styleUrl: './economist.component.css'
})
export class EconomistComponent {

}
