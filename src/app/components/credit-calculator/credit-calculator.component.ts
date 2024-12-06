
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-credit-calculator",
    template: `
    <section class="credit-calculator">
      <div class="calculator-form">
        <h2 class="calculator-title">Покупайте авто в кредит на Aster.kz</h2>
        <p class="calculator-subtitle">
          Рассчитайте автокредит по вашим параметрам
        </p>
        <form>
          <div class="form-group">
            <label for="carCost">Стоимость авто ₸</label>
            <input
              type="number"
              id="carCost"
              class="form-control"
              [(ngModel)]="carCost"
              name="carCost"
            />
          </div>
          <div class="form-group">
            <label for="downPayment">Первоначальный взнос ₸</label>
            <input
              type="number"
              id="downPayment"
              class="form-control"
              [(ngModel)]="downPayment"
              name="downPayment"
            />
          </div>
          <div class="form-group">
            <label>Срок кредита</label>
            <div class="term-buttons">
              <button
                type="button"
                *ngFor="let term of loanTerms"
                [class.active]="selectedTerm === term"
                (click)="selectTerm(term)"
              >
                {{ term }}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="calculator-result">
        <h3 class="result-title">Предварительный ежемесячный платеж</h3>
        <p class="monthly-payment">{{ calculateMonthlyPayment() }} ₸</p>
        <p class="result-note">
          Подайте заявку и получите финальное одобрение за 2 минуты
        </p>
        <button class="apply-button">Получить одобрение онлайн</button>
      </div>
    </section>
  `,
    styles: [
        `
      .credit-calculator {
        display: flex;
        background-color: #fff;
        border-radius: 14px;
        overflow: hidden;
        margin: 40px 0;
      }
      .calculator-form,
      .calculator-result {
        padding: 26px 24px;
      }
      .calculator-form {
        flex: 1;
      }
      .calculator-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .calculator-subtitle {
        color: #6f839a;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 20px;
      }
      .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #d0d5dd;
        border-radius: 8px;
      }
      .term-buttons {
        display: flex;
        gap: 8px;
      }
      .term-buttons button {
        padding: 10px 15px;
        border: 1px solid #d0d5dd;
        border-radius: 8px;
        background: none;
        cursor: pointer;
      }
      .term-buttons button.active {
        background-color: #f7d117;
        font-weight: 700;
      }
      .calculator-result {
        background-color: #f7d117;
        flex-basis: 40%;
      }
      .result-title {
        font-size: 13px;
        margin-bottom: 10px;
      }
      .monthly-payment {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .result-note {
        font-size: 13px;
        margin-bottom: 15px;
      }
      .apply-button {
        width: 100%;
        padding: 15px;
        background-color: #fff;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
      }
      @media (max-width: 991px) {
        .credit-calculator {
          flex-direction: column;
        }
      }
    `,
    ],
    imports: [CommonModule, FormsModule]
})
export class CreditCalculatorComponent {
  carCost: number = 3000000;
  downPayment: number = 600000;
  loanTerms: number[] = [12, 24, 36, 48, 60, 72, 84];
  selectedTerm: number = 84;

  selectTerm(term: number) {
    this.selectedTerm = term;
  }

  calculateMonthlyPayment(): string {
    const principal = this.carCost - this.downPayment;
    const monthlyInterestRate = 0.1 / 12; // Assuming 10% annual interest rate
    const numberOfPayments = this.selectedTerm;

    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment.toFixed(0);
  }
}
