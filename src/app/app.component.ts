import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public callsCounter$;
  title = 'AngularBase';
  constructor(private globalService: GlobalService) {
    this.callsCounter$ = this.globalService.selectCallsCounter$();
  }
}
