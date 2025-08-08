import { CategoriaEntity } from './../../categorias/categoria-entity';
import { CategoriaService } from './../../categorias/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LugaresService } from '../lugares.service';
import { LugarEntity } from '../lugar-entity';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {

  public camposForm: FormGroup;
  public categorias: CategoriaEntity[] = [];

  public constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugaresService
  ) {
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
    const formValue = this.camposForm.value;

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
        this.camposForm.reset();
      },
      error: (erro) => console.log("Erro inesperado!", erro)
    })
  }

}
