import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  percentagesList: number[] = [5, 10, 15, 25, 50];
  bill: string = '';
  tip: string = '';
  people: string = '';
  show: boolean = false;

  tipPpAmount: string = '0.00';
  billPpAmount: string = '0.00';

  getTip(tipAmount: number): void {
    this.tip = String(tipAmount);
    this.calculate();
  }

  calculate() {
    let billFloat = parseFloat(this.bill);
    let tipFloat = parseFloat(this.tip) / 100;
    let peopleInt = parseInt(this.people);

    if (!isNaN(peopleInt) && peopleInt !== 0) {
      this.show = false;

      let tipAmount = billFloat * tipFloat;
      let billAmount = billFloat + tipAmount;

      this.tipPpAmount = !isNaN(tipAmount)
        ? (tipAmount / parseInt(this.people)).toFixed(2)
        : '0.00';
      this.billPpAmount = !isNaN(billAmount)
        ? (billAmount / parseInt(this.people)).toFixed(2)
        : '0.00';
    }

    if (peopleInt === 0) {
      this.show = true;
      console.log(this.show);
    }
  }

  reset(): void {
    this.bill = '';
    this.tip = '';
    this.people = '';
    this.tipPpAmount = '0.00';
    this.billPpAmount = '0.00';
  }
}
