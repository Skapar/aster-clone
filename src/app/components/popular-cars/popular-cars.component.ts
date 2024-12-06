
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-popular-cars",
    template: `
    <section class="popular-cars">
      <h2 class="section-title">Популярные автомобили</h2>
      <div class="popular-cars-grid">
        <div
          class="popular-car-column"
          *ngFor="let column of popularCarsColumns"
        >
          <h3 class="column-title">{{ column.title }}</h3>
          <ul class="popular-car-list">
            <li *ngFor="let car of column.cars">{{ car }}</li>
          </ul>
        </div>
      </div>
    </section>
  `,
    styles: [
        `
      .popular-cars {
        background-color: #fff;
        padding: 40px 0;
      }
      .section-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .popular-cars-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .popular-car-column {
        margin-bottom: 20px;
      }
      .column-title {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .popular-car-list {
        list-style-type: none;
        padding: 0;
      }
      .popular-car-list li {
        font-size: 12px;
        color: #6f839a;
        margin-bottom: 5px;
      }
      @media (max-width: 991px) {
        .popular-cars-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 767px) {
        .popular-cars-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
    ],
    imports: [CommonModule]
})
export class PopularCarsComponent {
  popularCarsColumns = [
    {
      title: "Седаны",
      cars: [
        "Toyota Camry (1119)",
        "Hyundai Accent (444)",
        "LADA (ВАЗ) Granta (353)",
        "Chevrolet Cobalt (295)",
      ],
    },
    {
      title: "Внедорожники и кроссоверы",
      cars: [
        "Hyundai Tucson (249)",
        "Toyota RAV4 (221)",
        "Nissan Qashqai (214)",
        "Toyota Land Cruiser Prado (203)",
      ],
    },
    // Add more columns here...
  ];
}
