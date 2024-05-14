import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-entertaining-computer-science',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './entertaining-computer-science.component.html',
  styleUrl: './entertaining-computer-science.component.css'
})
export class EntertainingComputerScienceComponent {

}
