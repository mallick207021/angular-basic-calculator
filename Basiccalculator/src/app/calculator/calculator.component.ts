import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})


export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  operator?: string;
  result?: number;

  calculate() {
    if (this.num1 !== null && this.num2 !== null) {
      switch (this.operator) {
        case '+':
          this.result = this.num1 + this.num2;
          break;
        case '-':
          this.result = this.num1 - this.num2;
          break;
        case '*':
          this.result = this.num1 * this.num2;
          break;
        case '/':
          this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
          break;
      }
    } 
    else {
      this.result = NaN;
      alert("Please enter all fields");
    }
  }
}
