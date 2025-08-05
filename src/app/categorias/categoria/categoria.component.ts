import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  private camposForm: FormGroup;

  public constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required)
    });
  }

  public salvar() {
    console.log("Dados do formulário: ", this.camposForm.value);
    console.log("Está válido?")
  }

}
