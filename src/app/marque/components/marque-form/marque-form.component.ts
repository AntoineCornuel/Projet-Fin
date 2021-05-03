import { MarqueService } from 'src/app/core/services/http/marque.service';
import { Marque } from '../../../core/models/marque';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarqueFormData } from 'src/app/core/models/marque-form-data';

@Component({
  selector: 'app-marque-form',
  templateUrl: './marque-form.component.html',
  styleUrls: ['./marque-form.component.scss']
})
export class MarqueFormComponent implements OnInit {

  marqueForm: FormGroup;

  formAction: string;

  constructor(
    private fb: FormBuilder,
    private _marqueService: MarqueService,
    private _dialogRef: MatDialogRef<MarqueFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MarqueFormData
  ) {
    this.formAction = data.toUpdate? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.marqueForm = this.fb.group({
        nom: [data.marque.nom, [Validators.required, this.noWhitespaceValidator]],
        siegeSocial: [data.marque.siegeSocial, [Validators.required, this.noWhitespaceValidator]],
        chiffreAffaire: [data.marque.chiffreAffaire, [Validators.required]],
      })
    }
    else {
      this.marqueForm = this.fb.group({
        nom: ['', [Validators.required, this.noWhitespaceValidator]],
        siegeSocial: ['', [Validators.required, this.noWhitespaceValidator]],
        chiffreAffaire: ['', [Validators.required]],
      })
    }

  }

  ngOnInit(): void {
  }

  onSubmit(marque: Marque) {
    if (this.marqueForm.valid) {

      if (this.data.toUpdate) {
        marque.id = this.data.marque.id;
        this._marqueService.put(marque).subscribe((next) => {
          console.log("Modification de la marque");
          this.marqueForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._marqueService.post(marque).subscribe((next) => {
          console.log("");
          this.marqueForm.reset();
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