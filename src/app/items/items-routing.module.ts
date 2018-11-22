import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ItemsContainerComponent } from './items-container/items-container.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsContainerComponent
  },
  {
    path: ':id',
    component: ItemContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
