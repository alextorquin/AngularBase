import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private operationCounter = 0;
  private operationCounter$ = new BehaviorSubject<number>(0);
  constructor() {}

  public selectOperationCounter$() {
    return this.operationCounter$.asObservable();
  }

  public dispatchOperation() {
    this.operationCounter++;
    this.operationCounter$.next(this.operationCounter);
  }
}
