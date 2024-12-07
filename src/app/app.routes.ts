import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './components/auth/auth-component.component';
import { TireMarketplaceComponent } from './pages/tire-marketplace/tire-marketplace.component';
import {SellingCarsComponent} from './pages/selling-cars/selling-cars.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import {NotfoundComponent} from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent, title: 'auth'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'tires', component: TireMarketplaceComponent, title: 'Tire' },
  { path: 'cars-kz', component: SellingCarsComponent, title: 'Cars'},
  { path: 'favorites', component: FavoritesComponent, title: 'Favorite' },
  { path: '**', component: NotfoundComponent, title: '404'}
];
