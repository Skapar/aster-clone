
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-body-type-search",
    template: `
    <section class="body-type-search">
      <h2 class="section-title">Поиск авто по кузову</h2>
      <div class="body-type-options">
        <button class="body-type-option active">Седаны</button>
        <button class="body-type-option">Внедорожники</button>
        <button class="body-type-option">Универсалы</button>
        <button class="body-type-option">Купе</button>
        <button class="body-type-option">Минивэны</button>
        <button class="body-type-option">Хэтчбеки</button>
        <button class="body-type-option">Кабриолеты</button>
      </div>
      <div class="car-grid">
        <div class="car-card" *ngFor="let car of bodyTypeCars">
          <img [src]="car.image" [alt]="car.name" class="car-image" />
          <div class="car-details">
            <span class="car-price">{{ car.price }}</span>
            <h3 class="car-name">{{ car.name }}</h3>
            <p class="car-specs">{{ car.specs }}</p>
            <p class="car-location">{{ car.location }}</p>
            <p class="car-date">{{ car.date }}</p>
          </div>
        </div>
      </div>
      <a href="#" class="show-more">Показать все седаны</a>
    </section>
  `,
    styles: [
        `
      .body-type-search {
        background-color: #f9fafb;
        padding: 40px 0;
      }
      .section-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .body-type-options {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
      .body-type-option {
        padding: 17px 25px;
        border-radius: 8px;
        background-color: #fff;
        border: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      }
      .body-type-option.active {
        background-color: #0066cc;
        color: #fff;
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
export class BodyTypeSearchComponent {
  bodyTypeCars = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe342d9e8cad263bbdf093e8a5598c641918975f8854f8ba3cea33dac0dab4?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "600 000 ₸",
      name: "Volkswagen Jetta 1990",
      specs: "1.8 л • Механика • Передний",
      location: "Тараз",
      date: "24 августа",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe342d9e8cad263bbdf093e8a5598c641918975f8854f8ba3cea33dac0dab4?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "600 000 ₸",
      name: "Volkswagen Jetta 1990",
      specs: "1.8 л • Механика • Передний",
      location: "Тараз",
      date: "24 августа",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe342d9e8cad263bbdf093e8a5598c641918975f8854f8ba3cea33dac0dab4?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "600 000 ₸",
      name: "Volkswagen Jetta 1990",
      specs: "1.8 л • Механика • Передний",
      location: "Тараз",
      date: "24 августа",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe342d9e8cad263bbdf093e8a5598c641918975f8854f8ba3cea33dac0dab4?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "600 000 ₸",
      name: "Volkswagen Jetta 1990",
      specs: "1.8 л • Механика • Передний",
      location: "Тараз",
      date: "24 августа",
    },
    // Add more body type car objects here...
  ];
}
