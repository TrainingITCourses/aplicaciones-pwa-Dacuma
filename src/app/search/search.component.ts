import { OptionChange, ValueChange } from '../reducers/search/search.actions';
import { State } from './../reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Options } from '../options';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dcm-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  public values;

  optionsForm: FormGroup;
  public option = Options.status;
  valuesForm: FormGroup;

  constructor(private store: Store<State>) {
    this.optionsForm = new FormGroup({
      option: new FormControl(null)
    });
    this.optionsForm.controls['option'].setValue(this.option, { onlySelf: true });

    this.valuesForm = new FormGroup({
      value: new FormControl(null)
    });
    this.store.select('search').subscribe(res => {
      switch (res.option) {
        case Options.status:
          this.store.select('values').subscribe(result => {
            this.values = result.statuses;
          });
          break;
        case Options.mission:
          this.store.select('values').subscribe(result => {
            this.values = result.missions;
          });
          break;
        case Options.agency:
          this.store.select('values').subscribe(result => {
            this.values = result.agencies;
          });
          break;
      }
    });
  }

  ngOnInit() {
    this.initForms();
  }

  initForms(): void {
    this.optionsForm.valueChanges.subscribe(val => {
      this.store.dispatch(new OptionChange(val.option));
      this.valuesForm.controls['value'].setValue(null);
    });
    this.valuesForm.valueChanges.subscribe(val => {
      if (val.value) { this.store.dispatch(new ValueChange(val.value)); }
    });
  }
}
