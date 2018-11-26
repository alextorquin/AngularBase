import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../items/items-api.service';
import { GetAllError, GetAllOk, ItemActionTypes } from './items.actions';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private itemsApiService: ItemsApiService) {}

  @Effect()
  public getItemsEffect$ = this.actions$.pipe(
    ofType(ItemActionTypes.GetAll),
    switchMap(getAllAction =>
      this.itemsApiService.getAll().pipe(
        map(items => new GetAllOk(items)),
        catchError(err => of(new GetAllError(err.message)))
      )
    )
  );
}
