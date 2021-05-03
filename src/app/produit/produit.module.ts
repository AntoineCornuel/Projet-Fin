import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { ProduitListComponent } from './pages/produit-list/produit-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { ProduitDetailComponent } from './pages/produit-detail/produit-detail.component';


@NgModule({
  declarations: [ProduitComponent, ProduitListComponent, ProduitFormComponent, ProduitDetailComponent],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    SharedModule
  ]
})
export class ProduitModule { }
