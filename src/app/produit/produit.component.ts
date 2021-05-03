import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../core/models/produit';
import { ProduitService } from '../core/services/http/produit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits$ : Observable<Produit[]>;

  constructor(private _produitService: ProduitService) { }

  ngOnInit(): void {
    this.produits$ = this._produitService.get();
  }

}
