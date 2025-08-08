import { CategoriaService } from './../../categorias/categoria.service';
import { CategoriaEntity } from '../../categorias/categoria-entity';
import { LugarEntity } from '../../lugares/lugar-entity';
import { LugaresService } from './../../lugares/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{

  lugares: LugarEntity[] = [];
  categoriasFiltro: CategoriaEntity[] = [];

  public constructor(
    private lugarService: LugaresService,
    private CategoriaService: CategoriaService
  ) {}

  public ngOnInit(): void {
    this.CategoriaService.findAll().subscribe({
      next: (categorias) => this.categoriasFiltro = categorias
    });
    this.lugarService.findAll().subscribe({
      next: (lugaresResposta) => this.lugares = lugaresResposta
    });
  }

  public getTotalEstrelas(lugar: LugarEntity): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }
}
