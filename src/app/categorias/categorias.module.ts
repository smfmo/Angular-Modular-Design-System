import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
/*
 Reactive Forms module -> 
 Diferença do formulário padrão e do Reativo
 O Formulário reativo Fica "Observando" as mudanças
 no formulário
 */
@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
