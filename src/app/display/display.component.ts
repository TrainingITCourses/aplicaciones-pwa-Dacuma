import { State } from './../reducers/index';
import { Observable, of } from 'rxjs';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dcm-display',
  templateUrl: './display.component.html',
})
export class DisplayComponent {

  public launches$: Observable<any>;

  constructor(private store: Store<State>,
    cdr: ChangeDetectorRef) {
    this.launches$ = this.store.select('filteredLaunches');
  }

}
