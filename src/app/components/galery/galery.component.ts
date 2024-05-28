import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Img } from '../../core/models/models';
import { ApiService } from '../../core/api/api.service';

@Component({
    selector: 'app-galery',
    templateUrl: './galery.component.html',
    styleUrls: ['./galery.component.css']
  })
  export class GaleryComponent implements OnInit {
  
    images: Img[] = [];
    currentIndex = 0;
    lightboxVisible = false;
    currentImage = '';
  
    @ViewChild('lightboxContainer', { read: ElementRef }) lightboxContainer!: ElementRef;
    @ViewChild('closeBtn', { read: ElementRef }) closeBtn!: ElementRef;
    @ViewChild('nextBtn', { read: ElementRef }) nextBtn!: ElementRef;
    @ViewChild('prevBtn', { read: ElementRef }) prevBtn!: ElementRef;
  
    constructor(private api: ApiService) { }
    ngOnInit() {
        this.api.getImages().subscribe(images => {
            this.images = images;
          });

        if (this.images.length > 0) {
          this.currentImage = this.images[0].link; 
        }
      }

    openLightbox(index: number) {
        this.currentIndex = index;
        this.currentImage = this.images[this.currentIndex].link;
        this.showLightbox();
    }
  
    closeLightbox() {
      this.lightboxVisible = false;
    }
  
    showLightbox() {
      this.lightboxVisible = true;
      this.currentImage = this.images[this.currentIndex].link;
      this.setPrevNextButtonVisibility();
    }
  
    setPrevNextButtonVisibility() {
      this.prevBtn.nativeElement.style.display = this.currentIndex === 0 ? 'none' : 'block';
      this.nextBtn.nativeElement.style.display = this.currentIndex === this.images.length - 1 ? 'none' : 'block';
    }
  
    showNextImage() {
      if(this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.currentImage = this.images[this.currentIndex].link;
        this.setPrevNextButtonVisibility();
      }
    }
  
    showPrevImage() {
      if(this.currentIndex > 0) {
        this.currentIndex--;
        this.currentImage = this.images[this.currentIndex].link;
        this.setPrevNextButtonVisibility();
      }
    } 
  }