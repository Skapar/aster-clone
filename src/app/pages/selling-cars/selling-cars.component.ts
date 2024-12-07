import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { Car } from '../models';
import { SellingCarsService } from './selling-cars.service';

@Component({
  selector: 'app-selling-cars',
  imports: [
    NgForOf,
  ],
  templateUrl: './selling-cars.component.html',
  standalone: true,
  styleUrls: ['./selling-cars.component.css'], // Fixed the typo: `styleUrl` -> `styleUrls`
})
export class SellingCarsComponent implements OnInit {
  Cars: Car[] = []; // List to store retrieved cars
  errorMessage: string = ''; // Variable to store error messages (if any)

  constructor(private cs: SellingCarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.cs.listOfCars('camry', 30) // Optionally pass model and limit
      .subscribe({
        next: (data) => {
          this.Cars = data; // Assign the retrieved cars to the `Cars` array
          console.log("Cars retrieved:", this.Cars); // Debugging

        },
        error: (err) => {
          console.error("Error retrieving cars:", err);
          this.errorMessage = 'Failed to retrieve car data. Please try again later.';
        }
      });
  }
}
