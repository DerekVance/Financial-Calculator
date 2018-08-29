import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { FutureValueComponent } from './future-value/future-value.component';
import { PresentValueComponent } from './present-value/present-value.component'
import { DoubleComponent } from './double/double.component';

const routes: Routes = [
  { path: 'cash-flow', component: CashFlowComponent },
  { path: 'future-value-of-money', component: FutureValueComponent },
  { path: 'present-value-of-money', component: PresentValueComponent },
  { path: 'time-to-double-investment', component: DoubleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
