import { Action } from '@ngrx/store';

export enum FilteredLaunchesActionTypes {
  LoadLaunchesByAgency = '[FilteredLaunches] LoadLauchesByAgency',
  LoadLaunchesByMission = '[FilteredLaunches] LoadLauchesByMission',
  LoadLaunchesByStatus = '[FilteredLaunches] LoadLauchesByStatus',
  LaunchesLoaded = '[FilteredLaunches] LaunchesLoaded',
  LaunchesNotLoaded = '[FilteredLaunches] LaunchesNotLoaded'
}

export class LoadLaunchesByAgency implements Action {
  readonly type = FilteredLaunchesActionTypes.LoadLaunchesByAgency;
  constructor(public readonly payload?: any) { }
}
export class LoadLaunchesByMission implements Action {
  readonly type = FilteredLaunchesActionTypes.LoadLaunchesByMission;
  constructor(public readonly payload?: any) { }
}
export class LoadLaunchesByStatus implements Action {
  readonly type = FilteredLaunchesActionTypes.LoadLaunchesByStatus;
  constructor(public readonly payload?: any) { }
}
export class LaunchesLoaded implements Action {
  readonly type = FilteredLaunchesActionTypes.LaunchesLoaded;
  constructor(public readonly payload?: any) { }
}
export class LaunchesNotLoaded implements Action {
  readonly type = FilteredLaunchesActionTypes.LaunchesNotLoaded;
  constructor(public readonly payload?: any) { }
}

export type FilteredLaunchesActions = LoadLaunchesByAgency | LoadLaunchesByMission | LoadLaunchesByStatus |
                                      LaunchesLoaded | LaunchesNotLoaded;
