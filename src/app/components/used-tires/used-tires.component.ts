import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-used-tires",
    template: `
    <section class="used-tires">
      <h2 class="section-title">Б/У шины в Алматы</h2>
      <div class="tire-grid">
        <div class="tire-card" *ngFor="let tire of usedTires">
          <img [src]="tire.image" [alt]="tire.name" class="tire-image" />
          <div class="tire-details">
            <h3 class="tire-name">{{ tire.name }}</h3>
            <p class="tire-price">{{ tire.price }}</p>
            <p class="tire-price-note">цена за комплект</p>
            <p class="tire-specs">{{ tire.specs }}</p>
            <p class="tire-location">{{ tire.location }}</p>
            <p class="tire-set">{{ tire.set }}</p>
          </div>
        </div>
      </div>
      <a href="#" class="show-more">Показать все шины</a>
    </section>
  `,
    styles: [
        `
      .used-tires {
        background-color: #f9fafb;
        padding: 40px 0;
      }
      .section-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .tire-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .tire-card {
        background-color: #fff;
        border-radius: 14px;
        overflow: hidden;
      }
      .tire-image {
        width: 100%;
        height: auto;
      }
      .tire-details {
        padding: 15px;
      }
      .tire-name {
        font-size: 13px;
        font-weight: 500;
      }
      .tire-price {
        font-size: 16px;
        font-weight: 700;
        margin-top: 10px;
      }
      .tire-price-note {
        font-size: 13px;
        color: #6f839a;
      }
      .tire-specs,
      .tire-location,
      .tire-set {
        font-size: 12px;
        color: #101828;
        margin-top: 10px;
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
        .tire-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 767px) {
        .tire-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
    ],
    imports: [CommonModule]
})
export class UsedTiresComponent {
  @Input() usedTires: any[] = [];
}
