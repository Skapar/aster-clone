import { Component } from '@angular/core';
import { SearchFilters } from "./SearchFilters.component";
import { SearchOptions } from "./SearchOptions.component";
import { AdditionalFilters } from "./AdditionalFilters.component";
import { SearchActions } from "./SearchActions.component";
import { CarSearchFormComponent} from '../car-search-form/CarSearchForm.component';
import {CarSearchComponent} from '../car-search/car-search.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    CarSearchFormComponent,
    CarSearchComponent
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {

}




