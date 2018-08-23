import { Component, OnInit } from '@angular/core';
import { CashFlow } from '../cash-flow';

@Component({
  selector: 'app-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {

  CashFlow: CashFlow = {
    income: 0,
    expenses: 0,
    cashFlow: '$ 0'
  }

  calulateCashFlow(event: any) {
    this.CashFlow.cashFlow = "$ " + (this.CashFlow.income - this.CashFlow.expenses).toFixed(2)
    if (this.CashFlow.cashFlow === "$ NaN") {
      this.CashFlow.cashFlow = "$ ";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
