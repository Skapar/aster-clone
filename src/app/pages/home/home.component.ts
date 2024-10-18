import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsedTiresComponent } from '../../components/used-tires/used-tires.component';
import { CreditCalculatorComponent } from '../../components/credit-calculator/credit-calculator.component';
import { NewCarsComponent } from '../../components/new-cars/new-cars.component';
import { BodyTypeSearchComponent } from '../../components/body-type-search/body-type-search.component';
import { BudgetSearchComponent } from '../../components/budget-search/budget-search.component';
import { CarSearchComponent } from '../../components/car-search/car-search.component';
import { FeaturedCarsComponent } from '../../components/featured-cars/featured-cars.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { PopularCarsComponent } from '../../components/popular-cars/popular-cars.component';
import { PrivateListingsComponent } from '../../components/private-listings/private-listings.component';
// import { CreditCalculatorComponent } from './components/carSearchModule/Header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyTypeSearchComponent,
    BudgetSearchComponent,
    CarSearchComponent,
    FeaturedCarsComponent,
    FooterComponent,
    SearchFormComponent,
    HeaderComponent,
    NewCarsComponent,
    CreditCalculatorComponent,
    UsedTiresComponent,
    PopularCarsComponent,
    PrivateListingsComponent
  ],
  templateUrl: './home.component.html',

})
export class HomeComponent {}
