import { LoadLaunchesByAgency, LoadLaunchesByMission, LoadLaunchesByStatus } from '../reducers/filtered-launches/filtered-launches.actions';

import { State } from './../reducers/index';

import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../services/agencies.service';
import { StatusService } from '../services/status.service';
import { MissionService } from '../services/mission.service';
import { LaunchService } from '../services/launch.service';
import { Options } from '../options';
import { Store } from '@ngrx/store';
import { LoadAgencies, LoadMissions, LoadStatuses } from '../reducers/values/values.actions';

@Component({
  selector: 'dcm-main-container',
  templateUrl: './main-container.component.html',
})
export class MainContainerComponent implements OnInit {

  public agencies;
  public missions;
  public statuses;
  isLoading: boolean;
  public launches = [];

  constructor(private _agenciesService: AgenciesService,
    private _missionService: MissionService,
    private _statusService: StatusService,
    private _launchService: LaunchService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadMissions());
    this.store.dispatch(new LoadStatuses());

    this.store.select('values').subscribe(res => {
      this.isLoading = !(res.loadedAgencies && res.loadedMissions && res.loadedStatuses);
    });

    this.store.select('search').subscribe(res => {
      if (res.value === -1) { return; }

      switch (res.option) {
        case Options.agency:
          this.store.dispatch(new LoadLaunchesByAgency(res.value));
          break;
        case Options.mission:
          this.store.dispatch(new LoadLaunchesByMission(res.value));
          break;
        case Options.status:
          this.store.dispatch(new LoadLaunchesByStatus(res.value));
          break;
      }
    });
  }
}
