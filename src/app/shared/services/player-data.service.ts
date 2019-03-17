import { Injectable } from '@angular/core';
import { IPlayerDetails } from "../../model/players";
import { HttpClient } from "@angular/common/http";
import { Observable, from,of } from "rxjs";
import {map,tap,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  // private _serviceUrl = "http://localhost:52256/api";
  private _serviceUrl = "http://localhost:62817/api";
  // private _serviceUrl = "http://172.30.2.103:55446/api";

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private _http: HttpClient) {

  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server Error');
  }

  getPlayers(): Observable<any> {
    return this._http.get(this._serviceUrl+"/Player").pipe(
      map(this.extractData));
      console.log(this.extractData);
  }

}
