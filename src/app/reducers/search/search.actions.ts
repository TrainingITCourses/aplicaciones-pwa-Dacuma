import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  optionChange = '[Search] Option Change',
  valueChange = '[Search] Value Change'
}

export class OptionChange implements Action {
  readonly type = SearchActionTypes.optionChange;
  constructor(public readonly payload?: any) { }
}

export class ValueChange implements Action {
  readonly type = SearchActionTypes.valueChange;
  constructor(public readonly payload?: any) { }
}

export type SearchActions = OptionChange | ValueChange;
