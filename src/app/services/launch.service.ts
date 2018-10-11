import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }

  public getLaunches(): Observable<any> {
    return this.http.get('assets/launchlibrary.json');
  }

  public getByMission(id): Observable<any> {
    return this.http.get('assets/launchlibrary.json').pipe(
      map((items: any) => {
        const result = items.launches;
        return result.filter(launch => launch.missions !== null &&
          launch.missions.some(mission => mission.type === Number(id))
        ).map(r => this.resLaunch(r));
      }, error => console.error(error))
    );
  }

  public getByAgency(id): Observable<any> {
    return this.http.get('assets/launchlibrary.json').pipe(
      map((items: any) => {
        const result = items.launches;
        return result.filter(launch => launch.missions !== null &&
          launch.missions.some(mission => mission.agencies !== null &&
            mission.agencies.some(agency => agency.id === Number(id)))
        ).map(r => this.resLaunch(r));
      }, error => console.error(error))
    );
  }

  public getByStatus(id): Observable<any> {
    return this.http.get('assets/launchlibrary.json').pipe(
      map((items: any) => {
        const result = items.launches;
        return result.filter(launch => launch.status === Number(id)).map(r => this.resLaunch(r));
      }, error => console.error(error))
    );
  }

  resLaunch(item) {
    return { 'name': item.name };
  }
}
