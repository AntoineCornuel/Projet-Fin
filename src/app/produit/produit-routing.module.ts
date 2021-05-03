import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { ProduitDetailComponent } from './pages/produit-detail/produit-detail.component';
import { ProduitListComponent } from './pages/produit-list/produit-list.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [{
  path: '',
  component: ProduitComponent,
  children: [

    {
      path: '',
      component: ProduitListComponent
    },
    {
      path: '',
      component: ProduitFormComponent
    },
    {
      path: '',
      component: ProduitDetailComponent
    },
    {
      path: '',
      component: NotFoundComponent
    }
  ]
},
{
  path: '',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }