import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    NgFor,

  ]
})
export class FavoritesComponent {
  onEnter() {
    console.log('Enter button clicked');
  }
}
