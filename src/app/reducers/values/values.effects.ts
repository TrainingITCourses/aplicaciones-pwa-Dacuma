import { StatusService } from '../../services/status.service';
import { MissionService } from '../../services/mission.service';
import { AgenciesService } from '../../services/agencies.service';
import {
  ValuesActionTypes, LoadAgencies, AgenciesLoaded, NotLoaded,
  LoadMissions, MissionsLoaded, LoadStatuses, StatusesLoaded
} from './values.actions';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ValuesEffects {

  @Effect()
  public loadAgencies$ = this.actions$.ofType(ValuesActionTypes.LoadAgencies).pipe(
    mergeMap((action: LoadAgencies) => this.agenciesService.getAgencies().pipe(
      map(launches => new AgenciesLoaded(launches)),
      catchError(error => of(new NotLoaded(error.message)))
    ))
  );
  @Effect()
  public loadMissions$ = this.actions$.ofType(ValuesActionTypes.LoadMissions).pipe(
    mergeMap((action: LoadMissions) => this.missionService.getMissions().pipe(
      map(missions => new MissionsLoaded(missions)),
      catchError(error => of(new NotLoaded(error.message)))
    ))
  );
  @Effect()
  public loadStatuses$ = this.actions$.ofType(ValuesActionTypes.LoadStatuses).pipe(
    mergeMap((action: LoadStatuses) => this.statusService.getStatuses().pipe(
      map(statuses => new StatusesLoaded(statuses)),
      catchError(error => of(new NotLoaded(error.message)))
    ))
  );

  constructor(private actions$: Actions,
    private agenciesService: AgenciesService,
    private missionService: MissionService,
    private statusService: StatusService,
  ) { }
}
