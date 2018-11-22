import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {
  private url = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient, private globalService: GlobalService) {}

  public post(newItem) {
    this.globalService.dispatchOperation();
    return this.http.post(this.url, newItem);
  }
  public getAll() {
    this.globalService.dispatchOperation();
    return this.http.get<any[]>(this.url);
  }
  public getById(itemId) {
    this.globalService.dispatchOperation();
    return this.http.get<any>(this.url + '/' + itemId);
  }
}
