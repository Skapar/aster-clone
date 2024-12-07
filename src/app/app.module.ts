import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { TireMarketplaceComponent } from './pages/tire-marketplace/tire-marketplace.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { registerLocaleData } from '@angular/common';
import localeKz from '@angular/common/locales/kk';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeKz, 'kk');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TireMarketplaceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'kk' }
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
