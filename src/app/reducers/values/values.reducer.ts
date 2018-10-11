import { ValuesActionTypes, ValuesActions, } from './values.actions';
import { Action } from '@ngrx/store';


export interface State {
  missions: any[];
  loadedMissions: boolean;
  agencies: any[];
  loadedAgencies: boolean;
  statuses: any[];
  loadedStatuses: boolean;
  message?: string;
}

export const initialState: State = {
  missions: [],
  loadedMissions: false,
  agencies: [],
  loadedAgencies: false,
  statuses: [],
  loadedStatuses: false,
  message: '',
};

export function reducer(state = initialState, action: ValuesActions): State {
  switch (action.type) {
    case ValuesActionTypes.LoadAgencies:
      return state;
    case ValuesActionTypes.AgenciesLoaded:
      state.agencies = action.payload;
      state.loadedAgencies = true;
      return { ...state };
    case ValuesActionTypes.LoadMissions:
      return state;
    case ValuesActionTypes.MissionsLoaded:
      state.missions = action.payload;
      state.loadedMissions = true;
      return { ...state };
    case ValuesActionTypes.LoadStatuses:
      return state;
    case ValuesActionTypes.StatusesLoaded:
      state.loadedStatuses = true;
      state.statuses = action.payload;
      return { ...state };
    case ValuesActionTypes.NotLoaded:
      return { ...state, 'message': action.payload };
    default:
      return state;
  }
}
