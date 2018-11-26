import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetAll } from '../../store/items/items.actions';
import { RootState } from '../../store/root/root.state';
import { ItemsApiService } from '../items-api.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
  public items$: Observable<any[]>;
  public itemsRedux$: Observable<any[]>;
  constructor(private itemsApiService: ItemsApiService, private store: Store<RootState>) {}

  public ngOnInit() {
    this.items$ = this.itemsApiService.getAll();
    this.store.dispatch(new GetAll());
    this.itemsRedux$ = this.store.select('items', 'items');
  }

  public onSave(newItem) {
    this.items$ = this.itemsApiService.post(newItem).pipe(switchMap(() => this.itemsApiService.getAll()));
  }
}
