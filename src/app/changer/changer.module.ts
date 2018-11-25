import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangerRoutingModule } from './changer-routing.module';
import { ParentComponent } from './parent/parent.component';
import { DetectorComponent } from './detector/detector.component';

@NgModule({
  declarations: [ParentComponent, DetectorComponent],
  imports: [
    CommonModule,
    ChangerRoutingModule
  ]
})
export class ChangerModule { }
