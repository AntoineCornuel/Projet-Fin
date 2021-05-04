import { Produit } from '../../../core/models/produit';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/core/services/http/produit.service';
import { MatDialog } from '@angular/material/dialog';
import { ProduitFormComponent } from '../../components/produit-form/produit-form.component';
import { ProduitFormData } from 'src/app/core/models/produit-form-data';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  produits$ : Observable<Produit[]>;
  displayedColumns: string[] = ["id", "nom", "capacite","couleur", "update", "delete"];

  constructor(private _produitService: ProduitService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.produits$ = this._produitService.get();
  }

  delete(produit: Produit){
    this._produitService.delete(produit).subscribe(next => {
      this.loadData();
    })
  }

  openDialog(toUpdate: boolean, produit: Produit){

    const produitFormData: ProduitFormData = {
      toUpdate: toUpdate,
      produit: produit
    };

    const dialogRef = this.dialog.open(ProduitFormComponent,{
      data: produitFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

}
