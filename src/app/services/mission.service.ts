import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  public getMissions(): Observable<any> {
    return this.http.get('assets/launchmissions.json')
    .pipe(
      map((res: any) => res.types)
    );
  }

}
