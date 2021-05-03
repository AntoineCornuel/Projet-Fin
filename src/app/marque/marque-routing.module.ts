import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { MarqueFormComponent } from './components/marque-form/marque-form.component';
import { MarqueDetailComponent } from './pages/marque-detail/marque-detail.component';
import { MarqueListComponent } from './pages/marque-list/marque-list.component';
import { MarqueComponent } from './marque.component';

const routes: Routes = [{
  path: '',
  component: MarqueComponent,
  children: [

    {
      path: '',
      component: MarqueListComponent
    },
    {
      path: '',
      component: MarqueFormComponent
    },
    {
      path: '',
      component: MarqueDetailComponent
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
export class MarqueRoutingModule { }