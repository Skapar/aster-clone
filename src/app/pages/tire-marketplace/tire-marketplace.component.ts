import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { tireJson } from '../../data/service/json/tireJson'
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TireMarketplaceService, Tire } from './tire-marketplace.service';
import { PhotoSliderComponent } from '../../components/photo-slider/photo-slider.component';
import { skip } from 'rxjs/operators';

@Component({
    selector: 'app-tire-marketplace',
    templateUrl: './tire-marketplace.component.html',
    styleUrls: ['./tire-marketplace.component.css'],
    imports: [
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        NgFor,
        CommonModule,
        HeaderComponent,
        FooterComponent,
        PhotoSliderComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TireMarketplaceComponent implements OnInit {
  tires: Tire[] = [];
  filters: any = {};
  tires_count: number = 0;
  uniqueBrands: string[] = [];
  uniqueYears: number[] = [];

  constructor(private tireMarketplaceService: TireMarketplaceService) {}

  ngOnInit(): void {
    this.loadTires();
    this.loadTiresCount();
    this.loadUniqueBrands();
    this.loadUniqueYears();
  }

  loadTires(): void {
    this.tireMarketplaceService.getFilteredTires(this.filters)
    .subscribe(
      (data) => {
        this.tires = data.slice(3);
        console.log('Шины загружены:', this.tires);
        this.loadUniqueBrands();
        this.loadUniqueYears();
      },
      (error) => {
        console.error('Ошибка при загрузке шин:', error);
      }
    );
  }

  loadTiresCount(): void {
    this.tireMarketplaceService.getTiresCount(this.filters)
    .subscribe(
      (data) => {
        this.tires_count = data;
        console.log('Количество шин:', this.tires_count);
      }
    )
  }

  loadUniqueBrands(): void {
    this.uniqueBrands = [...new Set(this.tires.map(tire => tire.mark.name))];
  }

  loadUniqueYears(): void {
    console.log(this.tires);
    this.uniqueYears = [...new Set(this.tires.map(tire => tire.year))];
  }

  addToFavorites(tireId: number): void {
    console.log(`Added tire ${tireId} to favorites`);
  }

  buyTire(tireId: number): void {
    console.log(`Buying tire ${tireId}`);
  }
}
