import { ProduitService } from 'src/app/core/services/http/produit.service';
import { Produit } from './../../../core/models/produit';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProduitFormData } from 'src/app/core/models/produit-form-data';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.scss']
})
export class ProduitFormComponent implements OnInit {

  produitForm: FormGroup;

  formAction: string;

  constructor(
    private fb: FormBuilder,
    private _produitService: ProduitService,
    private _dialogRef: MatDialogRef<ProduitFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProduitFormData
  ) {
    this.formAction = data.toUpdate? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.produitForm = this.fb.group({
        nom: [data.produit.nom, [Validators.required, this.noWhitespaceValidator]],
        capacite: [data.produit.capacite, [Validators.required, this.noWhitespaceValidator]],
        couleur: [data.produit.couleur, [Validators.required]],
        nombreObjectif: [data.produit.nombreObjectif, [Validators.required]]
      })
    }
    else {
      this.produitForm = this.fb.group({
        nom: ['', [Validators.required, this.noWhitespaceValidator]],
        capacite: ['', [Validators.required, this.noWhitespaceValidator]],
        couleur: ['', [Validators.required]],
        nombreObjectif: ['', [Validators.required]]
      })
    }

  }

  ngOnInit(): void {
  }

  onSubmit(produit: Produit) {
    if (this.produitForm.valid) {

      if (this.data.toUpdate) {
        produit.id = this.data.produit.id;
        this._produitService.put(produit).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A STUDENT");
          this.produitForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._produitService.post(produit).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE ADDED A NEW STUDENT");
          this.produitForm.reset();
          this._dialogRef.close();
        })
      }


    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
