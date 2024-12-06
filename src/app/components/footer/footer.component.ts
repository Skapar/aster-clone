
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-footer",
    template: `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d460c24c3d111b239528a503528735191d854279e93b4cae89e21748e6291402?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
            alt="Aster logo"
            class="logo"
          />
          <div class="social-icons">
            <a href="#" aria-label="Facebook"
              ><img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/922afb9cf4c927fcf3dffad88e57a65c5b8069e131aa2e30b6dba2bd4027ca78?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
                alt=""
            /></a>
            <a href="#" aria-label="Instagram"
              ><img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e316491cd3c9202dea76ca7e165ca4149079d4cd1345b62b6ecfc090c280de74?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
                alt=""
            /></a>
          </div>
          <div class="email-contact">
            <span></span>
            <a href="mailto:support@aster.kz">supportaster.kz</a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h3>Автомобили</h3>
            <ul>
              <li><a href="#">Авто с пробегом</a></li>
              <li><a href="#">Авто с гарантиями</a></li>
              <li><a href="#">Новые авто</a></li>
              <li><a href="#">Выкуп авто</a></li>
              <li><a href="#">Комиссионная продажа</a></li>
              <li><a href="#">Варианты продажи</a></li>
              <li><a href="#">Trade-in</a></li>
              <li><a href="#">COM-TRADE</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Интересное</h3>
            <ul>
              <li><a href="#">Журнал</a></li>
              <li><a href="#">Aster Check</a></li>
              <li><a href="#">Карьера</a></li>
              <li><a href="#">Кабинет дилера</a></li>
              <li><a href="#">Шины</a></li>
              <li><a href="#">Рекламодателям</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Финансы и гарантии</h3>
            <ul>
              <li><a href="#">Автокредитование</a></li>
              <li><a href="#">Рассрочка</a></li>
              <li><a href="#">Безопасная покупка</a></li>
              <li><a href="#">7 дней на обмен</a></li>
              <li><a href="#">Техническая гарантия 30 дней</a></li>
              <li><a href="#">Продленная гарантия</a></li>
              <li><a href="#">Гарантированная цена выкупа</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Поддержка</h3>
            <ul>
              <li><a href="#">Правила размещения объявлений</a></li>
              <li><a href="#">Пользовательское соглашение</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">О проекте</a></li>
              <li><a href="#">Aster Гид</a></li>
              <li><a href="#">Карта сайта</a></li>
              <li><a href="#">Бонус</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-contact">
          <div class="call-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e1bc342c1dd5b44f9a54aa4f2046419eae633e03007f2e7a561db791086883?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
              alt="Call Center"
            />
            <span>Call Center</span>
          </div>
          <div class="phone-number">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41569cdccdf7da6571f1151461b60ab817d1d450b9957cb5f184d787455ad6d8?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
              alt="Phone icon"
            />
            <span>+7 708 941 08 08</span>
          </div>
          <a href="#" class="support-link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c94dc0ec7fe504a6b401a1ffe745553527157537b3a1ada2fa27aa65c92541a?placeholderIfAbsent=true&apiKey=1961f3cb0ee74210b21ba84ee064973c"
              alt="Support icon"
            />
            <span>Написать в службу заботы</span>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Aster 2020 - 2024</p>
        <p>© Все права защищены</p>
      </div>
    </footer>
  `,
    styles: [
        `
      .site-footer {
        background-color: #0066cc;
        color: #fff;
        padding: 42px 70px;
      }
      .footer-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .footer-logo {
        flex-basis: 25%;
      }
      .logo {
        max-width: 148px;
        height: auto;
      }
      .social-icons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .email-contact {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 20px;
        font-size: 14px;
      }
      .footer-links {
        display: flex;
        flex-basis: 50%;
        justify-content: space-between;
      }
      .footer-column h3 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .footer-column ul {
        list-style-type: none;
        padding: 0;
      }
      .footer-column li {
        margin-bottom: 10px;
      }
      .footer-column a {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
      }
      .footer-contact {
        flex-basis: 25%;
      }
      .call-center,
      .phone-number,
      .support-link {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
      }
      .support-link {
        color: #fff;
        text-decoration: none;
      }
      .footer-bottom {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #e0edfd;
      }
      @media (max-width: 991px) {
        .site-footer {
          padding: 42px 20px;
        }
        .footer-logo,
        .footer-links,
        .footer-contact {
          flex-basis: 100%;
          margin-bottom: 30px;
        }
        .footer-links {
          flex-wrap: wrap;
        }
        .footer-column {
          flex-basis: 50%;
          margin-bottom: 20px;
        }
      }
      @media (max-width: 767px) {
        .footer-column {
          flex-basis: 100%;
        }
      }
    `,
    ],
    imports: [CommonModule]
})
export class FooterComponent {}
