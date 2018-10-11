import { Action } from '@ngrx/store';

export enum ValuesActionTypes {
  LoadAgencies = '[Values] Load Valuess',
  AgenciesLoaded = '[Values] Agencies Loaded',
  LoadMissions = '[Values] Load Missions',
  MissionsLoaded = '[Values] Missions Loaded',
  LoadStatuses = '[Values] Load Statuses',
  StatusesLoaded = '[Values] Statuses Loaded',
  NotLoaded = '[Values] Not Loaded'
}

export class LoadAgencies implements Action {
  readonly type = ValuesActionTypes.LoadAgencies;
}
export class AgenciesLoaded implements Action {
  readonly type = ValuesActionTypes.AgenciesLoaded;
  constructor(public readonly payload?: any) { }
}

export class LoadMissions implements Action {
  readonly type = ValuesActionTypes.LoadMissions;
}
export class MissionsLoaded implements Action {
  readonly type = ValuesActionTypes.MissionsLoaded;
  constructor(public readonly payload?: any) { }
}

export class LoadStatuses implements Action {
  readonly type = ValuesActionTypes.LoadStatuses;
}
export class StatusesLoaded implements Action {
  readonly type = ValuesActionTypes.StatusesLoaded;
  constructor(public readonly payload?: any) { }
}

export class NotLoaded implements Action {
  readonly type = ValuesActionTypes.NotLoaded;
  constructor(public readonly payload?: any) { }
}

export type ValuesActions = LoadAgencies | AgenciesLoaded |
  LoadMissions | MissionsLoaded |
  LoadStatuses | StatusesLoaded |
  NotLoaded;
