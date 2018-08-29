import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { FutureValueComponent } from './future-value/future-value.component';
import { PresentValueComponent } from './present-value/present-value.component'

const routes: Routes = [
  { path: 'cash-flow', component: CashFlowComponent },
  { path: 'future-value', component: FutureValueComponent },
  { path: 'present-value', component: PresentValueComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
