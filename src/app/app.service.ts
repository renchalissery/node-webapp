import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  public getData(): Observable<any> {
    return this._http.get('http://localhost:3000/data');
  }

  public addData(data:string): Observable<any> {
    return this._http.post('http://localhost:3000/data',{content:data});
  }

}
