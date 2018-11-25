import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { CounterComponent } from './counter/counter.component';
import { RecounterComponent } from './recounter/recounter.component';

@NgModule({
  declarations: [CounterComponent, RecounterComponent],
  imports: [
    CommonModule,
    ReduxRoutingModule
  ]
})
export class ReduxModule { }
