import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE = 0;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private callsCounter = INITIAL_STATE;
  private callsCounter$ = new BehaviorSubject<number>(this.callsCounter);
  constructor() {}

  public selectCallsCounter$() {
    return this.callsCounter$.asObservable();
  }

  public dispatchCall() {
    this.callsCounter++;
    this.callsCounter$.next(this.callsCounter);
  }
}
