import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaEntity } from '../../categorias/categoria-entity';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent {

  public camposForm: FormGroup;
  public categorias: CategoriaEntity[] = [];

  public constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categorias: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  public salvar(): void {
    console.log("Valores:", this.camposForm.value);
  }

}
