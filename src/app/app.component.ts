import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalService } from './global.service';
import { RootState } from './store/root/root.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  public callsCounter$;
  public callsCounterRedux$;
  title = 'AngularBase';
  constructor(private globalService: GlobalService, private store: Store<RootState>) {
    this.callsCounter$ = this.globalService.selectCallsCounter$();
    this.callsCounterRedux$ = this.store.select('global', 'callsCounter');
  }
}
