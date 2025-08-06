import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  public camposForm: FormGroup;

  public constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required)
    });
  }

  public salvar(): void {
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid) {
      this.categoriaService
        .save(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log("Salvo com sucesso!", categoria);
            this.camposForm.reset();
          },
          error: erro => console.error("Ocorreu um erro", erro)
        });
    }
  }

  public isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }

}
