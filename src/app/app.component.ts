import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public operationsCounter$;
  title = 'AngularBase';
  constructor(private globalService: GlobalService) {
    this.operationsCounter$ = this.globalService.selectOperationCounter$();
  }
}
