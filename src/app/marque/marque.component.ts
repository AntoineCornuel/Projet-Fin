import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../core/models/marque';
import { MarqueService } from '../core/services/http/marque.service';


@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {

  marques$ : Observable<Marque[]>;

  constructor(private _marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marques$ = this._marqueService.get();
  }

}
