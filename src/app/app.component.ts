import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  public callsCounter$;
  title = 'AngularBase';
  constructor(private globalService: GlobalService, private swUpdate: SwUpdate) {
    this.callsCounter$ = this.globalService.selectCallsCounter$();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const appData = event.available.appData;
        const versionMessage = appData ? appData['versionMessage'] : 'New version is available!';
        const msg = `${versionMessage} Do you want to update?`;
        if (confirm(msg)) {
          window.location.reload();
        }
      });
    }
  }
}
