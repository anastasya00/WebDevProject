import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 

  searchForm!: FormGroup

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }
}
