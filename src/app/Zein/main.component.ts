import { UsedTiresComponent } from './carSearchModule/UsedTires.component';
import { CreditCalculatorComponent } from './carSearchModule/CreditCalculator.component';
import { NewCarsComponent } from './carSearchModule/NewCars.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyTypeSearchComponent } from './carSearchModule/BodyTypeSearch.component';
import { BudgetSearchComponent } from './carSearchModule/BudgetSearch.component';
import {CarSearchComponent} from './carSearchModule/CarSearch.component'
import {FeaturedCarsComponent} from './carSearchModule/FeaturedCars.component'
import {FooterComponent} from './carSearchModule/Footer.component'
import {SearchFormComponent} from './carSearchModule/SearchForm.component'
import { HeaderComponent } from './carSearchModule/Header.component';
import { PopularCarsComponent } from './carSearchModule/PopularCars.component';
import { PrivateListingsComponent } from './carSearchModule/PrivateListings.component';
// import { CreditCalculatorComponent } from './components/carSearchModule/Header.component';

@Component({
  selector: 'app-root-main-zein',
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
  templateUrl: './main.component.html',

})
export class AppComponentZein {}
