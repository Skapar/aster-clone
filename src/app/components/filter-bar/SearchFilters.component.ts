/**
 * This code was generated by Builder.io.
 */
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "search-filters",
    template: `
    <div class="search-filters">
      <div class="filter-options">
        <button class="filter-btn active">Все</button>
        <button class="filter-btn">С пробегом</button>
        <button class="filter-btn">Новые</button>
        <button class="filter-btn">От Aster.kz</button>
      </div>
      <div class="city-options">
        <span class="city active">Все города</span>
        <span class="city">Алматы</span>
        <span class="city">Шымкент</span>
      </div>
      <button class="more-options-btn">
        <span>Ещё</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5dea11677c0563c0ad5a2b931a7e716bceba2c6e533c9a9eae301d826ba62b?placeholderIfAbsent=true&apiKey=42475809f4c148fa9ae1fe84d7b1a359"
          alt=""
          class="more-icon"
        />
      </button>
    </div>
  `,
    styles: [
        `
      .search-filters {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 13px;
        font-weight: 500;
        flex-wrap: wrap;
        margin-top: 2px;
      }
      .filter-options {
        display: flex;
        gap: 8px;
        font-size: 14px;
        color: #101828;
      }
      .filter-btn {
        border-radius: 8px;
        background-color: #f3f7fe;
        padding: 13px 24px;
        border: none;
        cursor: pointer;
      }
      .filter-btn.active {
        background-color: #e0edfd;
        color: #0066cc;
      }
      .city-options {
        display: flex;
        gap: 14px;
        color: #6a82a1;
        margin: auto 0;
      }
      .city {
        cursor: pointer;
      }
      .city.active {
        color: #0066cc;
        font-weight: 700;
      }
      .more-options-btn {
        display: flex;
        gap: 6px;
        color: #0066cc;
        font-weight: 600;
        background: none;
        border: none;
        cursor: pointer;
        align-items: center;
      }
      .more-icon {
        width: 23px;
        height: 23px;
      }
      @media (max-width: 991px) {
        .filter-btn {
          padding: 13px 20px;
        }
      }
    `,
    ],
    imports: [CommonModule]
})
export class SearchFilters {}
