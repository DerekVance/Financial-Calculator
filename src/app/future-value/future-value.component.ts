import { Component, OnInit } from '@angular/core';
import { FutureValue } from '../future-value'

@Component({
  selector: 'app-future-value',
  templateUrl: './future-value.component.html',
  styleUrls: ['./future-value.component.scss']
})
export class FutureValueComponent implements OnInit {

  FutureValue: FutureValue = {
    present: 0,
    years: 0,
    rate: 0,
    compound: 0,
    futureValue: '$ 0'
  }

  calulateFutureValue(event: any) {
    console.log('here')
    const rate = this.FutureValue.years / 100
    const numberOfPeriods = this.FutureValue.years * this.FutureValue.compound
    const rateOfReturn = rate / this.FutureValue.compound
    console.log('rate', rate, 'number of periods', numberOfPeriods, 'rate of return', rateOfReturn);
    
    this.FutureValue.futureValue = '$ ' + (this.FutureValue.present * Math.pow( ( 1 + rateOfReturn ), numberOfPeriods  ) ).toFixed(2)
    // if (this.FutureValue.futureValue === '$ NaN') {
    //   this.FutureValue.futureValue = '$ 0'
    // }
    console.log(this.FutureValue.futureValue)
  }

  constructor() { }

  ngOnInit() {
  }

}
