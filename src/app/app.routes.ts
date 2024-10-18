import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './components/auth/auth-component.component';
import { TireMarketplaceComponent } from './pages/tire-marketplace/tire-marketplace.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'tires', component: TireMarketplaceComponent, title: 'Tire' },
  { path: 'favorites', component: FavoritesComponent, title: 'Favorite' },
];
