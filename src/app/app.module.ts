import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';
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
    AppComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideOAuthClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
