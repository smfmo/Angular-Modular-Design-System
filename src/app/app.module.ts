import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*
NgModule Decorator -> Define que a classe é um módulo angular
-> Declarations: Lista de componentes, diretivas e pipes
que pertencem a este módulo. 
(AppComponent é o componente principal)
Só podem ser usados dentro deste módulo.

-> imports: Aqui se importam outros módulos necessários

-> providers: lista de servicos disponiveis para injeção de dependencia
Serviços aqui ficam disponíveis para toda a aplicação.

->bootstrap: Define qual componente será renderizado inicialmente.
Normalmente o AppComponent (componente raiz)

O angular cria uma instância desse componente no elemento <app-root>

*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
