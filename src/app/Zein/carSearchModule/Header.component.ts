
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="site-header">
      <div class="logo-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cccf46c80bc50e561318c08dd571d2ac6f119313b79ed1a8365d195cb1b128e?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
          alt="Site logo"
          class="logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b2986d07acd5290802c15abcd387911b3857e122e16537d484a32dd6c5405ea?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
          alt="Menu icon"
          class="menu-icon"
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be1b8440716663337e03f40a6cb09c179bfc4b4c0210ec92f87f5d5f26d7158?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
        alt="Header background"
        class="header-bg"
      />
    </header>
  `,
  styles: [
    `
      .site-header {
        position: relative;
        width: 100%;
      }
      .logo-container {
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        width: 54px;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        z-index: 1;
      }
      .logo {
        width: 30px;
        height: auto;
      }
      .menu-icon {
        width: 18px;
        height: 18px;
      }
      .header-bg {
        width: 100%;
        height: auto;
        margin-top: 420px;
      }
      @media (max-width: 991px) {
        .header-bg {
          margin-top: 40px;
        }
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {}