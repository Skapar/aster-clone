
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="site-header">
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
      .header-bg {
        width: 100%;
        height: auto;
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