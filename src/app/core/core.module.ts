import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProduitService } from './services/http/produit.service';
import { MarqueService } from './services/http/marque.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    
  ],
  providers : [ProduitService, MarqueService],
  exports : [HeaderComponent, FooterComponent],
})
export class CoreModule { }
