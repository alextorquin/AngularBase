import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private callsCounter = 0;
  private callsCounter$ = new BehaviorSubject<number>(0);
  constructor() {}

  public selectCallsCounter$() {
    return this.callsCounter$.asObservable();
  }

  public dispatchCall() {
    this.callsCounter++;
    this.callsCounter$.next(this.callsCounter);
  }
}
