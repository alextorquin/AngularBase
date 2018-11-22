import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ViewItemComponent } from './item-container/view-item/view-item.component';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ListItemsComponent } from './items-container/list-items/list-items.component';
import { NewItemComponent } from './items-container/new-item/new-item.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [ItemsContainerComponent, NewItemComponent, ListItemsComponent, ItemContainerComponent, ViewItemComponent],
  imports: [CommonModule, ReactiveFormsModule, ItemsRoutingModule]
})
export class ItemsModule {}
