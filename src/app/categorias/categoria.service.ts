import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaEntity } from './categoria-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public constructor(private http: HttpClient) { }

  public save(categoria: CategoriaEntity): Observable<CategoriaEntity> {
    return this.http.post<CategoriaEntity>("http://localhost:8080/categorias", categoria);
  }

  public findAll(): Observable<CategoriaEntity[]> {
    return this.http.get<CategoriaEntity[]>("http://localhost:8080/categorias");
  }

  public findById(idCategoria: number): Observable<CategoriaEntity> {
    return this.http.get<CategoriaEntity>("http://localhost:8080/categorias/" + idCategoria);
  }
  
}
