import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';

@Component({
  selector: 'dcm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public version = '2.0';

  constructor(private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'current: ' +
            event.current.hash +
            '. New: ' +
            event.available.hash +
            ' ?';
          if (confirm(msg)) { window.location.reload(); }
        }
      );
    }
  }

  checkForUpdate() {
    this.swUpdate.checkForUpdate()
      .then(() => {
        console.log('Log from Check for Update');
      })
      .catch(err => {
        console.error(err);
      });
  }

}
