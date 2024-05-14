import { Component } from '@angular/core'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-applied-computer-science',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './applied-computer-science.component.html',
  styleUrl: './applied-computer-science.component.css'
})
export class AppliedComputerScienceComponent {

  img_links = ['/assets/images/news1.jpg', '/assets/images/news2.jpg', '/assets/images/news3.jpg'];

}
