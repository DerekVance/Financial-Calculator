import { Component, OnInit } from '@angular/core';
import { GainLoss } from '../gain-loss'

@Component({
  selector: 'app-gain-loss',
  templateUrl: './gain-loss.component.html',
  styleUrls: ['./gain-loss.component.scss']
})
export class GainLossComponent implements OnInit {

  GainLoss: GainLoss = {
    market: 0,
    purchase: 0,
    difference: 0,
    percent: 0,
    growth: ''
  }

  calculatePercent() {
    this.GainLoss.difference = this.GainLoss.market - this.GainLoss.purchase;

    if (this.GainLoss.difference < 0) {
      this.GainLoss.growth = 'loss';
    } else {
      this.GainLoss.growth = 'gain';
    }

    this.GainLoss.percent = Number(((this.GainLoss.difference / this.GainLoss.purchase) * 100).toFixed(2)) < 0 ? -Number(((this.GainLoss.difference / this.GainLoss.purchase) * 100).toFixed(2)) : Number(((this.GainLoss.difference / this.GainLoss.purchase) * 100).toFixed(2)) ;

  }

  constructor() { }

  ngOnInit() {
  }

}
