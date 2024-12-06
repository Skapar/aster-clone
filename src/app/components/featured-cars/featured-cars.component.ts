
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-featured-cars",
    template: `
    <section class="featured-cars">
      <h2 class="section-title">Проверенные авто с гарантией</h2>
      <div class="car-grid">
        <div class="car-card" *ngFor="let car of featuredCars">
          <img [src]="car.image" [alt]="car.name" class="car-image" />
          <div class="car-details">
            <span class="car-price">{{ car.price }}</span>
            <span class="car-monthly-price">{{ car.monthlyPrice }}</span>
            <h3 class="car-name">{{ car.name }}</h3>
            <p class="car-specs">{{ car.specs }}</p>
            <p class="car-location">{{ car.location }}</p>
            <p class="car-date">{{ car.date }}</p>
          </div>
        </div>
      </div>
      <a href="#" class="show-more">Показать авто с гарантией</a>
    </section>
  `,
    styles: [
        `
      .featured-cars {
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
export class FeaturedCarsComponent {
  featuredCars = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbc5fe5c1efe18a361839fa03221dbb3ae7e664ea872bf6a229e868b459fdec5?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "4 220 000 ₸",
      monthlyPrice: "от 103 432₸/мес",
      name: "LADA (ВАЗ) Granta 2020",
      specs: "1.6 л • Автомат • Передний • 117 211 км",
      location: "Шымкент",
      date: "4 октября",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbc5fe5c1efe18a361839fa03221dbb3ae7e664ea872bf6a229e868b459fdec5?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "4 220 000 ₸",
      monthlyPrice: "от 103 432₸/мес",
      name: "LADA (ВАЗ) Granta 2020",
      specs: "1.6 л • Автомат • Передний • 117 211 км",
      location: "Шымкент",
      date: "4 октября",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbc5fe5c1efe18a361839fa03221dbb3ae7e664ea872bf6a229e868b459fdec5?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "4 220 000 ₸",
      monthlyPrice: "от 103 432₸/мес",
      name: "LADA (ВАЗ) Granta 2020",
      specs: "1.6 л • Автомат • Передний • 117 211 км",
      location: "Шымкент",
      date: "4 октября",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbc5fe5c1efe18a361839fa03221dbb3ae7e664ea872bf6a229e868b459fdec5?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "4 220 000 ₸",
      monthlyPrice: "от 103 432₸/мес",
      name: "LADA (ВАЗ) Granta 2020",
      specs: "1.6 л • Автомат • Передний • 117 211 км",
      location: "Шымкент",
      date: "4 октября",
    },
  ];
}
