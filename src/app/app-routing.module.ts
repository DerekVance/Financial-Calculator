import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { FutureValueComponent } from './future-value/future-value.component';

const routes: Routes = [
  { path: 'cash-flow', component: CashFlowComponent },
  { path: 'future-value', component: FutureValueComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
