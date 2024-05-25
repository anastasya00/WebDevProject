import { Component } from '@angular/core';
import { Img } from '../../core/models/models';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {

  public images: Img[] = [];

  constructor(private api: ApiService) {
    this.api.getImages().subscribe(images => {
      this.images = images;
    })
  }

}