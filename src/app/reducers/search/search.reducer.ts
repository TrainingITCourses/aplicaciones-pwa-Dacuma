import { SearchActionTypes, SearchActions } from './search.actions';
import { Options } from '../../options';
import { Action } from '@ngrx/store';


export interface State {
  option: Options;
  value: number;
}

export const initialState: State = {
  option: Options.status,
  value: -1
};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SearchActionTypes.optionChange:
      state.option = action.payload;
      state.value = -1;
      return { ...state };
    case SearchActionTypes.valueChange:
      state.value = action.payload;
      return { ...state };
    default:
      return state;
  }
}
