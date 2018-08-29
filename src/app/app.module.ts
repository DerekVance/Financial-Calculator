import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { FutureValueComponent } from './future-value/future-value.component';
import { PresentValueComponent } from './present-value/present-value.component';

@NgModule({
  declarations: [
    AppComponent,
    CashFlowComponent,
    FutureValueComponent,
    PresentValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
