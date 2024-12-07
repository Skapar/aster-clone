import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tire {
  id: number;
  price: number;
  mark: {
    id: number;
    name: string;
    latinName: string;
    description: string | null;
  };
  model: {
    id: number;
    name: string;
    description: string | null;
    features: string | null;
    latinName: string;
  };
  country: string;
  radius: number;
  width: number;
  height: number;
  year: number;
  week: number;
  averageWear: number;
  averageTreadDepth: number;
  setAmount: number;
  season: string;
  statusCode: string;
  photos: string[];
  photosS: string[];
  purchaseDate: string | null;
  saleDate: string | null;
  carMarka: string | null;
  carModel: string | null;
  carYear: string | null;
  rimSetAmount: number;
  asterXTireSetId: number;
  tires: any;
  newSetPrice: number;
  photosCount: number;
  branch: {
    id: number;
    name: string;
    code: string;
    address: string;
    longitude: string;
    latitude: string;
    mapUrl: string;
    phoneNumber: string;
    phoneNumber2: string;
    city: string;
    workingTime: string;
    cityCode: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TireMarketplaceService {
  private apiUrl = 'https://aster.kz/api-tires/web/tires-set/filtered';

  constructor(private http: HttpClient) {}

  getFilteredTires(filters: any): Observable<Tire[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<{ list: Tire[] }>(this.apiUrl, filters, { headers })
      .pipe(
        map(response => response.list)
      );
  }
}
