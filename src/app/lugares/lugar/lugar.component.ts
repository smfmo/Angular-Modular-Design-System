import { CategoriaService } from './../../categorias/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaEntity } from '../../categorias/categoria-entity';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {

  public camposForm: FormGroup;
  public categorias: CategoriaEntity[] = [];

  public constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categorias: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  public ngOnInit(): void {
      this.categoriaService.findAll().subscribe({
          next: (listaCategorias) => this.categorias = listaCategorias,
          error: erro => console.log("Erro inesperado:", erro)
      })
  }

  public salvar(): void {
    console.log("Valores:", this.camposForm.value);
  }

}
