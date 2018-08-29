import { Component, OnInit } from '@angular/core';
import { Double } from '../double';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.scss']
})
export class DoubleComponent implements OnInit {

  Double: Double = {
    rate: 0,
    years: "0"
  }

  calculateDouble(event: any) {
    console.log("years", this.Double.years, "rate", this.Double.rate);
    
    this.Double.years = ( 72 / this.Double.rate).toFixed(2);
    if(this.Double.years === 'Infinity' ) {
      this.Double.years = 'Invalid Rate'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
