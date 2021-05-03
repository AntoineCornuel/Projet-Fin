import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from '../../models/marque';

@Injectable()
export class MarqueService {

  endPoint: string = environment.MarqueEndpoint;


  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Marque[]> {
    return this._httpClient.get<Marque[]>(this.endPoint);
  }

  getById(id: number): Observable<Marque> {
    return this._httpClient.get<Marque>(this.endPoint+"/"+id);
  }

  post(marque: Marque): Observable<Marque>{
    return this._httpClient.post<Marque>(this.endPoint, marque)
  }

  put(marque: Marque): Observable<Marque>{
    return this._httpClient.put<Marque>(this.endPoint+"/"+marque.id, marque)
  }

  delete(marque: Marque): Observable<Marque>{
    return this._httpClient.delete<Marque>(this.endPoint+"/"+marque.id)
  }
}