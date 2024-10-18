
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-budget-search",
  template: `
    <section class="budget-search">
      <h2 class="section-title">Поиск авто по бюджету</h2>
      <div class="budget-options">
        <button class="budget-option active">до 5 млн., тг</button>
        <button class="budget-option">от 5 - 10 млн., тг</button>
        <button class="budget-option">от 10 - 15 млн., тг</button>
        <button class="budget-option">от 15 - 20 млн., тг</button>
        <button class="budget-option">от 20 млн., тг</button>
      </div>
      <div class="car-grid">
        <div class="car-card" *ngFor="let car of budgetCars">
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
      <a href="#" class="show-more">Показать все авто до 5 млн., тг</a>
    </section>
  `,
  styles: [
    `
      .budget-search {
        background-color: #f9fafb;
        padding: 40px 0;
      }
      .section-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .budget-options {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
      .budget-option {
        padding: 18px 25px;
        border-radius: 8px;
        background-color: #fff;
        border: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      }
      .budget-option.active {
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
  standalone: true,
  imports: [CommonModule],
})
export class BudgetSearchComponent {
  budgetCars = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77aa54600aebc88e1449832832828580cb5844809d6a68b8da9d935a4443996c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "2 500 000 ₸",
      name: "Nissan Maxima 1999",
      specs: "3.0 л • Автомат • Передний • 246 070 км",
      location: "Шымкент",
      date: "4 октября",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77aa54600aebc88e1449832832828580cb5844809d6a68b8da9d935a4443996c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "2 500 000 ₸",
      name: "Nissan Maxima 1999",
      specs: "3.0 л • Автомат • Передний • 246 070 км",
      location: "Шымкент",
      date: "4 октября",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77aa54600aebc88e1449832832828580cb5844809d6a68b8da9d935a4443996c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "2 500 000 ₸",
      name: "Nissan Maxima 1999",
      specs: "3.0 л • Автомат • Передний • 246 070 км",
      location: "Шымкент",
      date: "4 октября",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/77aa54600aebc88e1449832832828580cb5844809d6a68b8da9d935a4443996c?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c",
      price: "2 500 000 ₸",
      name: "Nissan Maxima 1999",
      specs: "3.0 л • Автомат • Передний • 246 070 км",
      location: "Шымкент",
      date: "4 октября",
    },
  ];
}
