import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TireMarketplaceComponent } from './pages/tire-marketplace/tire-marketplace.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HomeComponent,
        TireMarketplaceComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
