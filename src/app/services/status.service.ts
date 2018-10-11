import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  public getStatuses(): Observable<any> {
    return this.http.get('assets/launchstatus.json')
    .pipe(
      map((res: any) => res.types)
    );
  }

}
