import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueRoutingModule } from './marque-routing.module';
import { MarqueComponent } from './marque.component';
import { MarqueListComponent } from './pages/marque-list/marque-list.component';
import { SharedModule } from '../shared/shared.module';
import { MarqueFormComponent } from './components/marque-form/marque-form.component';
import { MarqueDetailComponent } from './pages/marque-detail/marque-detail.component';


@NgModule({
  declarations: [MarqueComponent, MarqueListComponent, MarqueFormComponent, MarqueDetailComponent],
  imports: [
    CommonModule,
    MarqueRoutingModule,
    SharedModule
  ]
})
export class MarqueModule { }
