import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponentZein } from './Zein/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppComponentZein
  ],
  template: '<app-root-main-zein></app-root-main-zein>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
