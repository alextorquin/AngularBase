import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangerRoutingModule } from './changer-routing.module';
import { ParentComponent } from './parent/parent.component';
import { DetectorComponent } from './detector/detector.component';
import { ChildComponent } from './parent/child/child.component';
import { AsyncComponent } from './async/async.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [ParentComponent, DetectorComponent, ChildComponent, AsyncComponent, SubscribeComponent],
  imports: [
    CommonModule,
    ChangerRoutingModule
  ]
})
export class ChangerModule { }
