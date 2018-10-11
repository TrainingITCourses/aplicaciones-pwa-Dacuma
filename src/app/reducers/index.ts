import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromFilteredLaunches from './filtered-launches/filtered-launches.reducer';
import * as fromSearch from './search/search.reducer';
import * as fromValues from './values/values.reducer';
export interface State {

  filteredLaunches: fromFilteredLaunches.State;
  search: fromSearch.State;
  values: fromValues.State;
}

export const reducers: ActionReducerMap<State> = {

  filteredLaunches: fromFilteredLaunches.reducer,
  search: fromSearch.reducer,
  values: fromValues.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
