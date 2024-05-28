import { Injectable } from '@angular/core';
import { ApiService } from '../core/api/api.service';
import { Img } from '../core/models/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotoService {
  constructor(private apiService: ApiService) {}

  getData(): Observable<any[]> {
    return this.apiService.getImages().pipe(map((images: Img[]) => images.map((img: Img) => ({
        itemImageSrc: img.link,
        thumbnailImageSrc: img.link,
        alt: `Description for Image ${img.id}`,
        title: `Title ${img.id}`
      }))
    ));
  }

  getImages(): Observable<any[]> {
    return this.getData();
  }
}