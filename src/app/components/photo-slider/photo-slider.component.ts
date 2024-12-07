import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-slider',
  imports: [],
  templateUrl: './photo-slider.component.html',
  styleUrl: './photo-slider.component.css'
})
export class PhotoSliderComponent {
  @Input() photos: string[] = [];
  currentIndex: number = 0;

  nextPhoto(): void {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  prevPhoto(): void {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }
}
