import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  public camposForm: FormGroup;

  public constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required)
    });
  }

  public salvar(): void {
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid) {
      console.log('valores digitados: ', this.camposForm.value)
    }
  }

  public isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }

}
