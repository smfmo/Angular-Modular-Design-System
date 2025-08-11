import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaEntity } from './categoria-entity';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public apiUrl: string = environment.apiUrl + "/categorias";

  public constructor(private http: HttpClient) { }

  public save(categoria: CategoriaEntity): Observable<CategoriaEntity> {
    return this.http.post<CategoriaEntity>(this.apiUrl, categoria);
  }

  public findAll(): Observable<CategoriaEntity[]> {
    return this.http.get<CategoriaEntity[]>(this.apiUrl);
  }

  public findById(idCategoria: number): Observable<CategoriaEntity> {
    return this.http.get<CategoriaEntity>(this.apiUrl + "/" + idCategoria);
  }
  
}
