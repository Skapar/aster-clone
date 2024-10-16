import { UsedTiresComponent } from './Zein/carSearchModule/UsedTires.component';
import { CreditCalculatorComponent } from './Zein/carSearchModule/CreditCalculator.component';
import { NewCarsComponent } from './Zein/carSearchModule/NewCars.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyTypeSearchComponent } from './Zein/carSearchModule/BodyTypeSearch.component';
import { BudgetSearchComponent } from './Zein/carSearchModule/BudgetSearch.component';
import {CarSearchComponent} from './Zein/carSearchModule/CarSearch.component'
import {FeaturedCarsComponent} from './Zein/carSearchModule/FeaturedCars.component'
import {FooterComponent} from './Zein/carSearchModule/Footer.component'
import {SearchFormComponent} from './Zein/carSearchModule/SearchForm.component'
import { HeaderComponent } from './Zein/carSearchModule/Header.component';

// import { CreditCalculatorComponent } from './components/carSearchModule/Header.component';



// Добавьте здесь и другие компоненты, которые вы хотите использовать

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyTypeSearchComponent,  // Импортируйте здесь ваши компоненты
    BudgetSearchComponent,
    CarSearchComponent,
    FeaturedCarsComponent,
    FooterComponent,
    SearchFormComponent,
    HeaderComponent,
    NewCarsComponent,
    CreditCalculatorComponent,
    UsedTiresComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
