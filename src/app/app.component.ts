import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  public callsCounter$;
  public now: number = Date.now();
  title = 'AngularBase';
  constructor(private globalService: GlobalService) {
    this.callsCounter$ = this.globalService.selectCallsCounter$();
  }
}
