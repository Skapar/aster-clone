/**
 * This code was generated by Builder.io.
 */
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "search-options",
    template: `
    <div class="search-options">
      <div class="option-selects">
        <div class="select-wrapper">
          <label for="brand" class="visually-hidden">Марка</label>
          <select id="brand" class="option-select">
            <option>Марка</option>
          </select>
        </div>
        <div class="select-wrapper">
          <label for="model" class="visually-hidden">Модель</label>
          <select id="model" class="option-select">
            <option>Модель</option>
          </select>
        </div>
        <div class="select-wrapper">
          <label for="generation" class="visually-hidden">Поколение</label>
          <select id="generation" class="option-select">
            <option>Поколение</option>
          </select>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aecb68cd47cb758a9b19970b4ea139dcc6f3604debc2b07be0b9db377f16cfb2?placeholderIfAbsent=true&apiKey=42475809f4c148fa9ae1fe84d7b1a359"
          alt=""
          class="option-icon"
        />
      </div>
      <div class="year-inputs">
        <div class="input-wrapper">
          <label for="yearFrom" class="visually-hidden">Год выпуска, от</label>
          <input
            type="text"
            id="yearFrom"
            class="year-input"
            placeholder="Год выпуска, от"
          />
        </div>
        <div class="input-wrapper">
          <label for="yearTo" class="visually-hidden">Год, до</label>
          <input
            type="text"
            id="yearTo"
            class="year-input"
            placeholder="Год, до"
          />
        </div>
      </div>
      <div class="price-inputs">
        <div class="input-wrapper">
          <label for="priceFrom" class="visually-hidden">Цена от, ₸</label>
          <input
            type="text"
            id="priceFrom"
            class="price-input"
            placeholder="Цена от, ₸"
          />
        </div>
        <div class="input-wrapper">
          <label for="priceTo" class="visually-hidden">Цена до, ₸</label>
          <input
            type="text"
            id="priceTo"
            class="price-input"
            placeholder="Цена до, ₸"
          />
        </div>
      </div>
    </div>
  `,
    styles: [
        `
      .search-options {
        display: flex;
        margin-top: 24px;
        width: 100%;
        gap: 20px;
        font-size: 14px;
        color: #59697b;
        font-weight: 500;
        line-height: 2;
        justify-content: space-between;
      }
      .option-selects {
        display: flex;
        gap: 12px;
        font-size: 13px;
        color: #6f839a;
        flex-wrap: wrap;
      }
      .select-wrapper {
        position: relative;
      }
      .option-select {
        border-radius: 14px;
        background-color: #fff;
        padding: 20px 16px;
        border: 1px solid #e2e6eb;
        appearance: none;
        padding-right: 40px;
        cursor: pointer;
      }
      .select-wrapper::after {
        content: "";
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/8ba90be0531abff1422643df1b9808c684147ad8a8998e565abc0a4bc6bf2aa9?placeholderIfAbsent=true&apiKey=42475809f4c148fa9ae1fe84d7b1a359");
        background-size: contain;
        pointer-events: none;
      }
      .option-icon {
        width: 44px;
        height: 54px;
        border-radius: 16px;
      }
      .year-inputs,
      .price-inputs {
        display: flex;
      }
      .input-wrapper {
        position: relative;
      }
      .year-input,
      .price-input {
        border: 1px solid #e2e6eb;
        padding: 21px 16px;
      }
      .year-input:first-child,
      .price-input:first-child {
        border-radius: 14px 0 0 14px;
      }
      .year-input:last-child,
      .price-input:last-child {
        border-radius: 0 14px 14px 0;
        border-left: none;
      }
      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      @media (max-width: 991px) {
        .search-options {
          max-width: 100%;
          flex-direction: column;
        }
        .option-selects {
          max-width: 100%;
        }
        .year-inputs,
        .price-inputs {
          width: 100%;
        }
        .year-input,
        .price-input {
          width: 50%;
        }
      }
    `,
    ],
    imports: [CommonModule]
})
export class SearchOptions {}
