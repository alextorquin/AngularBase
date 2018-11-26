import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { GlobalService } from '../global.service';
import { IncrementCallsCounter } from '../store/global/global.actions';
import { RootState } from '../store/root/root.state';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {
  private url = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient, private globalService: GlobalService, private store: Store<RootState>) {}

  public post(newItem) {
    this.globalService.dispatchCall();
    this.store.dispatch(new IncrementCallsCounter());
    return this.http.post(this.url, newItem);
  }
  public getAll() {
    this.globalService.dispatchCall();
    this.store.dispatch(new IncrementCallsCounter());
    return this.http.get<any[]>(this.url);
  }
  public getById(itemId) {
    this.globalService.dispatchCall();
    this.store.dispatch(new IncrementCallsCounter());
    return this.http.get<any>(this.url + '/' + itemId);
  }
}
