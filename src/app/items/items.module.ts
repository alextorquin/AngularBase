import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { NewItemComponent } from './items-container/new-item/new-item.component';
import { ListItemsComponent } from './items-container/list-items/list-items.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ViewItemComponent } from './item-container/view-item/view-item.component';

@NgModule({
  declarations: [ItemsContainerComponent, NewItemComponent, ListItemsComponent, ItemContainerComponent, ViewItemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
