
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-search-form",
    template: `
    <section class="search-section">
      <div class="search-container">
        <h1 class="search-title">Проверенные авто с гарантией</h1>
        <div class="search-tabs">
          <button class="tab-button active">Все</button>
          <button class="tab-button">С пробегом</button>
          <button class="tab-button">Новые</button>
          <button class="tab-button">От Aster.kz</button>
        </div>
        <form class="search-form">
          <div class="form-row">
            <div class="form-group">
              <label for="brand" class="visually-hidden">Марка</label>
              <select id="brand" class="form-control">
                <option>Марка</option>
              </select>
            </div>
            <div class="form-group">
              <label for="model" class="visually-hidden">Модель</label>
              <select id="model" class="form-control">
                <option>Модель</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label class="checkbox-label">
              <input type="checkbox" class="checkbox-input" />
              <span class="checkbox-text">Гарантия</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" class="checkbox-input" />
              <span class="checkbox-text">Кредит</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" class="checkbox-input" />
              <span class="checkbox-text">Проверено</span>
            </label>
          </div>
          <button type="submit" class="submit-button">
            Показать 18 998 авто
          </button>
        </form>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/54464d362596f7fd244d7a5d9df7843fc8cce7af04ace69c7ad3a0791b406550?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
        alt="Car illustration"
        class="search-image"
      />
    </section>
  `,
    styles: [
        `
      .search-section {
        overflow-x: hidden;
        background-color: #f2f4f7;
        display: flex;
        width: 100%;
        justify-content: center;
      }
      .search-container {
        width: 100%;
        max-width: 1440px;
      }
      .search-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 36px;
      }
      .search-tabs {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
      }
      .tab-button {
        border-radius: 8px;
        padding: 14px 43px;
        font-size: 14px;
        font-weight: 500;
      }
      .tab-button.active {
        background-color: #0066cc;
        color: #fff;
      }
      .search-form {
        background-color: #fff;
        border-radius: 14px;
        padding: 14px;
      }
      .form-row {
        display: flex;
        gap: 12px;
        margin-bottom: 14px;
      }
      .form-group {
        flex: 1;
      }
      .form-control {
        width: 100%;
        padding: 15px 16px;
        border: 1px solid #e0edfd;
        border-radius: 8px;
      }
      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .checkbox-input {
        width: 20px;
        height: 20px;
      }
      .checkbox-text {
        font-size: 14px;
      }
      .submit-button {
        width: 100%;
        background-color: #0066cc;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 16px;
        font-size: 14px;
        font-weight: 600;
        margin-top: 14px;
      }
      .search-image {
        width: 50%;
        height: auto;
      }
      @media (max-width: 991px) {
        .search-section {
          flex-direction: column;
          padding: 34px 20px;
        }
        .search-image {
          width: 100%;
          margin-top: 20px;
        }
      }
    `,
    ],
    imports: [CommonModule, FormsModule]
})
export class SearchFormComponent {}
