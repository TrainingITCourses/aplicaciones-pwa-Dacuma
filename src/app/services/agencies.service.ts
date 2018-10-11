import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(private http: HttpClient) { }

  public getAgencies(): Observable<any> {
    return this.http.get('assets/launchagencies.json').pipe(
      map((res: any) => res.agencies)
    );
  }

}
