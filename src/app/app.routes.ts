import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TireMarketplaceComponent } from './pages/tire-marketplace/tire-marketplace.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'tires', component: TireMarketplaceComponent, title: 'Tire' },
];
