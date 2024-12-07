import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Car } from "../models";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SellingCarsService {
  BASE_URL = 'https://api.api-ninjas.com/v1/cars'; // Updated to match the API URL

  constructor(private http: HttpClient) {}

  listOfCars(model: string = 'camry', limit: number = 30): Observable<Car[]> {
    const apiKey = 'ks4GPx34rPC1nvUhscLYvw==IbmsTRvuBXrkj7eW';
    const headers = new HttpHeaders({
      'X-Api-Key': apiKey // Add the API key here
    });

    // Construct the URL with query parameters
    const url = `${this.BASE_URL}?limit=${limit}&model=${model}`;

    // Make the GET request with headers
    return this.http.get<Car[]>(url, { headers });
  }
}
