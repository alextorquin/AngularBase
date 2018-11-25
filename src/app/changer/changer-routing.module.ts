import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectorComponent } from './detector/detector.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'detector',
    component: DetectorComponent
  },
  {
    path: 'family',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangerRoutingModule {}
