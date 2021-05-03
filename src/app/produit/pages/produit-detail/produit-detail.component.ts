import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/core/models/produit';
import { ProduitService } from 'src/app/core/services/http/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  produitId: number;

  produit$: Observable<Produit>;

  constructor(private _activateRoute: ActivatedRoute,
    private _produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.produitId) {
      this.fetchData(this.produitId);
    }
  }

  fetchData(id: number): void {
    this.produit$ = this._produitService.getById(id);
  }


}
