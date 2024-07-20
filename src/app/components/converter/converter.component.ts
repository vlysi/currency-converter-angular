import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  amount = 0;
  sourceCurrency = 'USD';
  targetCurrency = 'EUR';
  total = 0;

  currencies: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor(){

  }

  ngOnInit(): void {  
  }

  convert() {

    switch(this.sourceCurrency) {
      case 'USD':
        if(this.targetCurrency === 'USD'){
          this.total = this.amount;
        }
        if (this.targetCurrency === 'EUR') {
          this.total = this.amount * 0.92;
        }
        if (this.targetCurrency === 'LIBRA') {
          this.total = this.amount * 0.77;
        }
        break;
      case 'EUR':
        if(this.targetCurrency === 'USD'){
          this.total = this.amount * 1.09;
        }
        if (this.targetCurrency === 'EUR') {
          this.total = this.amount;
        }
        if (this.targetCurrency === 'LIBRA') {
          this.total = this.amount * 0.84;
        }
        break;
      case 'LIBRA':
        if(this.targetCurrency === 'USD'){
          this.total = this.amount * 1.29;
        }
        if (this.targetCurrency === 'EUR') {
          this.total = this.amount * 1.19;
        }
        if (this.targetCurrency === 'LIBRA') {
          this.total = this.amount;
        }
        break;
    }
  }
}
