import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LugarEntity } from './lugar-entity';
import { Observable } from 'rxjs';
import { CategoriaEntity } from '../categorias/categoria-entity';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  public constructor(private http: HttpClient) { }

  public save(lugar: LugarEntity): Observable<LugarEntity> {
    return this.http.post<LugarEntity>("http://localhost:8080/lugares", lugar);
  }

  public findAll(): Observable<LugarEntity[]> {
    return this.http.get<LugarEntity[]>("http://localhost:8080/lugares");
  }

  public findById(idLugar: number): Observable<LugarEntity> {
    return this.http.get<LugarEntity>("http://localhost:8080/lugares/" + idLugar);
  }

  public filtrar(nome: string, categoria: string): Observable<LugarEntity[]> {
    let paramsFilter = new HttpParams;
    if(nome) {
      paramsFilter = paramsFilter.set('nome', nome)
    }
    if(categoria && categoria !== '-1') {
      paramsFilter = paramsFilter.set('categoria', categoria)
    }

    //const params = "nome=" + nome + "&" + "categoria=" + categoria;
  
    return this.http.get<LugarEntity[]>("http://localhost:8080/lugares/filters", {
      params: paramsFilter
    });
  }
}
