import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProduitModule } from './produit/produit.module';
import { MarqueModule } from './marque/marque.module';
 

const routes: Routes = [
  {   
    path: 'produits',
    loadChildren: () =>
      import('./produit/produit.module').then((m) => m.ProduitModule),
  },
  {
    path: 'marques',
    loadChildren: () =>
       import('./marque/marque.module').then((m) => m.MarqueModule), 
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
