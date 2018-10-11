import { mergeMap, map, catchError } from 'rxjs/operators';
import { LaunchService } from '../../services/launch.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FilteredLaunchesActionTypes, LoadLaunchesByMission, LaunchesLoaded, LaunchesNotLoaded } from './filtered-launches.actions';
import { of } from 'rxjs';


@Injectable()
export class FilteredLaunchesEffects {

  @Effect()
  public loadByMission$ = this.actions$.ofType(FilteredLaunchesActionTypes.LoadLaunchesByMission).pipe(
    mergeMap((action: LoadLaunchesByMission) => this._launchService.getByMission(action.payload).pipe(
      map(launches => new LaunchesLoaded(launches)),
      catchError(error => of(new LaunchesNotLoaded(error.message)))
    ))
  );
  @Effect()
  public loadByAgency$ = this.actions$.ofType(FilteredLaunchesActionTypes.LoadLaunchesByAgency).pipe(
    mergeMap((action: LoadLaunchesByMission) => this._launchService.getByAgency(action.payload).pipe(
      map(launches => new LaunchesLoaded(launches)),
      catchError(error => of(new LaunchesNotLoaded(error.message)))
    ))
  );
  @Effect()
  public loadByStatus$ = this.actions$.ofType(FilteredLaunchesActionTypes.LoadLaunchesByStatus).pipe(
    mergeMap((action: LoadLaunchesByMission) => this._launchService.getByStatus(action.payload).pipe(
      map(launches => new LaunchesLoaded(launches)),
      catchError(error => of(new LaunchesNotLoaded(error.message)))
    ))
  );

  constructor(private actions$: Actions, private _launchService: LaunchService) { }
}
