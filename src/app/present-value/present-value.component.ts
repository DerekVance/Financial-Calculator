import { Component, OnInit } from '@angular/core';
import { PresentValue } from '../present-value';
@Component({
  selector: 'app-present-value',
  templateUrl: './present-value.component.html',
  styleUrls: ['./present-value.component.scss']
})
export class PresentValueComponent implements OnInit {

  PresentValue: PresentValue = {
    future: 0,
    years: 0,
    rate: 0,
    compound: 0,
    presentValue: '$ 0'
  }

  calulatePresentValue(event: any) {
    console.log('here')
    const rate = this.PresentValue.years / 100
    const numberOfPeriods = this.PresentValue.years * this.PresentValue.compound
    const rateOfReturn = rate / this.PresentValue.compound
    console.log('rate', rate, 'number of periods', numberOfPeriods, 'rate of return', rateOfReturn);
    
    this.PresentValue.presentValue = '$ ' + (this.PresentValue.future * (1 / ( Math.pow( ( 1 + rateOfReturn ), numberOfPeriods  ) ) ) ).toFixed(2)
    if (this.PresentValue.presentValue === '$ NaN') {
      this.PresentValue.presentValue = '$ 0'
    }
    console.log(this.PresentValue.presentValue)
  }

  constructor() { }

  ngOnInit() {
  }

}
