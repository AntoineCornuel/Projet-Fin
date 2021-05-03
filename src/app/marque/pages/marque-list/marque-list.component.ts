import { Marque } from '../../../core/models/marque';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/core/services/http/marque.service';
import { MatDialog } from '@angular/material/dialog';
import { MarqueFormComponent } from '../../components/marque-form/marque-form.component';
import { MarqueFormData } from 'src/app/core/models/marque-form-data';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.scss']
})
export class MarqueListComponent implements OnInit {

  marques$ : Observable<Marque[]>;
  displayedColumns: string[] = ["id","nom","siegeSocial","chiffreAffaire","update", "delete"];

  constructor(private _marqueService: MarqueService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.marques$ = this._marqueService.get();
  }

  delete(marque: Marque){
    this._marqueService.delete(marque).subscribe(next => {
      this.loadData();
    })
  }

  openDialog(toUpdate: boolean, marque: Marque){

    const marqueFormData: MarqueFormData = {
      toUpdate: toUpdate,
      marque: marque
    };

    const dialogRef = this.dialog.open(MarqueFormComponent,{
      data: marqueFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

}
