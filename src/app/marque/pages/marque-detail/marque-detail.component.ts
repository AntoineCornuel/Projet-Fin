import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Marque } from 'src/app/core/models/marque';
import { MarqueService } from 'src/app/core/services/http/marque.service';

@Component({
  selector: 'app-marque-detail',
  templateUrl: './marque-detail.component.html',
  styleUrls: ['./marque-detail.component.scss']
})
export class MarqueDetailComponent implements OnInit {

  marqueId: number;

  marque$: Observable<Marque>;

  constructor(private _activateRoute: ActivatedRoute,
    private _marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marqueId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.marqueId) {
      this.fetchData(this.marqueId);
    }
  }

  fetchData(id: number): void {
    this.marque$ = this._marqueService.getById(id);
  }


}
