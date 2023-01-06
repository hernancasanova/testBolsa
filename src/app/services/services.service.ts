import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public getSymbols():Observable<any>{
    return this.http.get('http://localhost:9090/api/symbols');
  }

  public getSymbol(symbol:string):Observable<any>{
    return this.http.get('http://localhost:9090/api/historical/'+symbol);
  }
}
