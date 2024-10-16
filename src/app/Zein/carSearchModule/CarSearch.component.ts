
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./Header.component";
import { SearchFormComponent } from "./SearchForm.component";
import { FeaturedCarsComponent } from "./FeaturedCars.component";
import { NewCarsComponent } from "./NewCars.component";
import { CreditCalculatorComponent } from "./CreditCalculator.component";
import { UsedTiresComponent } from "./UsedTires.component";
import { PrivateListingsComponent } from "./PrivateListings.component";
import { BudgetSearchComponent } from "./BudgetSearch.component";
import { BodyTypeSearchComponent } from "./BodyTypeSearch.component";
import { PopularCarsComponent } from "./PopularCars.component";
import { FooterComponent } from "./Footer.component";

@Component({
  selector: "car-search",
  template: `
    <main class="car-search-page">
      <app-header></app-header>
      <section class="main-content">
        <app-search-form></app-search-form>
        <app-featured-cars></app-featured-cars>
        <app-new-cars></app-new-cars>
        <app-credit-calculator></app-credit-calculator>
        <app-used-tires></app-used-tires>
        <app-private-listings></app-private-listings>
        <app-budget-search></app-budget-search>
        <app-body-type-search></app-body-type-search>
        <app-popular-cars></app-popular-cars>
      </section>
      <app-footer></app-footer>
    </main>
  `,
  styles: [
    `
      .car-search-page {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding-top: 25px;
      }
      .main-content {
        background-color: #f9fafb;
        display: flex;
        width: 100%;
        padding-bottom: 42px;
        flex-direction: column;
        overflow: hidden;
        align-items: center;
      }
      @media (max-width: 991px) {
        .main-content {
          max-width: 100%;
        }
      }
    `,
  ],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SearchFormComponent,
    FeaturedCarsComponent,
    NewCarsComponent,
    CreditCalculatorComponent,
    UsedTiresComponent,
    PrivateListingsComponent,
    BudgetSearchComponent,
    BodyTypeSearchComponent,
    PopularCarsComponent,
    FooterComponent,
  ],
})
export class CarSearchComponent {}
