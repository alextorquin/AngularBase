import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../environments/environment';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  public callsCounter$;
  public title = environment.title;
  public now: number = Date.now();
  constructor(private globalService: GlobalService) {
    this.callsCounter$ = this.globalService.selectCallsCounter$();
  }
}
