import { CategoriaEntity } from './../../categorias/categoria-entity';
import { CategoriaService } from './../../categorias/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LugaresService } from '../lugares.service';
import { LugarEntity } from '../lugar-entity';
import { Validators_lugar } from '../validators';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {

  public validator: Validators_lugar;
  public categorias: CategoriaEntity[] = [];

  public constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugaresService
  ) {
    this.validator = new Validators_lugar();
  }

  public ngOnInit(): void {
    this.categoriaService.findAll().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias,
      error: erro => console.log("Erro inesperado:", erro)
    })
  }

  public salvar(): void {
    
    this.validator.camposForm.markAllAsTouched();

    if (this.validator.camposForm.valid) {
      const formValue = this.validator.camposForm.value;

      const lugar: LugarEntity = {
        nome: formValue.nome,
        categoria: {
          nome: formValue.categorias
        },
        localizacao: formValue.localizacao,
        url: formValue.url,
        avaliacao: formValue.avaliacao
      }

      this.lugarService.save(lugar).subscribe({
        next: (lugar) => {
          console.log("Salvo com sucesso", lugar);
          this.validator.camposForm.reset();
        },
        error: (erro) => console.log("Erro inesperado!", erro)
      });
    }
  }
}
