
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-private-listings",
    template: `
    <section class="private-listings">
      <h2 class="section-title">Объявления от частных лиц</h2>
      <div class="car-grid">
        <div class="car-card" *ngFor="let car of privateListings">
          <img [src]="car.image" [alt]="car.name" class="car-image" />
          <div class="car-details">
            <span class="car-price">{{ car.price }}</span>
            <span class="car-monthly-price" *ngIf="car.monthlyPrice">{{
              car.monthlyPrice
            }}</span>
            <h3 class="car-name">{{ car.name }}</h3>
            <p class="car-specs">{{ car.specs }}</p>
            <p class="car-location">{{ car.location }}</p>
            <p class="car-date">{{ car.date }}</p>
          </div>
        </div>
      </div>
      <a href="#" class="show-more">Показать объявления от частных лиц</a>
    </section>
  `,
    styles: [
        `
      .private-listings {
        background-color: #f9fafb;
        padding: 40px 0;
      }
      .section-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .car-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .car-card {
        background-color: #fff;
        border-radius: 14px;
        overflow: hidden;
      }
      .car-image {
        width: 100%;
        height: auto;
      }
      .car-details {
        padding: 15px;
      }
      .car-price {
        font-size: 16px;
        font-weight: 700;
      }
      .car-monthly-price {
        font-size: 12px;
        color: #6f839a;
      }
      .car-name {
        font-size: 13px;
        font-weight: 600;
        margin: 10px 0;
      }
      .car-specs,
      .car-location,
      .car-date {
        font-size: 12px;
        color: #6f839a;
        margin: 5px 0;
      }
      .show-more {
        display: inline-block;
        color: #0066cc;
        font-size: 14px;
        font-weight: 600;
        margin-top: 24px;
        text-decoration: none;
      }
      @media (max-width: 991px) {
        .car-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 767px) {
        .car-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
    ],
    imports: [CommonModule]
})
export class PrivateListingsComponent {
  privateListings = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14f1bdb0ee360494829eeaaf644aa9569d2886b9593c1f7e91939f9cc9e9e07c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "6 000 000 ₸",
      monthlyPrice: "от 147 060₸/мес",
      name: "Dodge Charger 2006",
      specs: "5.7 л • Автомат • Задний",
      location: "Алматы",
      date: "31 марта",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14f1bdb0ee360494829eeaaf644aa9569d2886b9593c1f7e91939f9cc9e9e07c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "6 000 000 ₸",
      monthlyPrice: "от 147 060₸/мес",
      name: "Dodge Charger 2006",
      specs: "5.7 л • Автомат • Задний",
      location: "Алматы",
      date: "31 марта",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14f1bdb0ee360494829eeaaf644aa9569d2886b9593c1f7e91939f9cc9e9e07c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "6 000 000 ₸",
      monthlyPrice: "от 147 060₸/мес",
      name: "Dodge Charger 2006",
      specs: "5.7 л • Автомат • Задний",
      location: "Алматы",
      date: "31 марта",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14f1bdb0ee360494829eeaaf644aa9569d2886b9593c1f7e91939f9cc9e9e07c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "6 000 000 ₸",
      monthlyPrice: "от 147 060₸/мес",
      name: "Dodge Charger 2006",
      specs: "5.7 л • Автомат • Задний",
      location: "Алматы",
      date: "31 марта",
    },
    // Add more private listing objects here...
  ];
}
