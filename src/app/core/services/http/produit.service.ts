import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../models/produit';


@Injectable()
export class ProduitService {

  endPoint: string = environment.ProduitEndpoint;


  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Produit[]> {
    return this._httpClient.get<Produit[]>(this.endPoint);
  }

  getById(id: number): Observable<Produit> {
    return this._httpClient.get<Produit>(this.endPoint+"/"+id);
  }

  post(produit: Produit): Observable<Produit>{
    return this._httpClient.post<Produit>(this.endPoint, produit)
  }

  put(produit: Produit): Observable<Produit>{
    return this._httpClient.put<Produit>(this.endPoint+"/"+produit.id, produit)
  }

  delete(produit: Produit): Observable<Produit>{
    return this._httpClient.delete<Produit>(this.endPoint+"/"+produit.id)
  }
}
