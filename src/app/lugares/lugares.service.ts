import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LugarEntity } from './lugar-entity';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  public apiUrl: string = environment.apiUrl + "/lugares";

  public constructor(private http: HttpClient) { }

  public save(lugar: LugarEntity): Observable<LugarEntity> {
    return this.http.post<LugarEntity>(this.apiUrl, lugar);
  }

  public findAll(): Observable<LugarEntity[]> {
    return this.http.get<LugarEntity[]>(this.apiUrl);
  }

  public findById(idLugar: number): Observable<LugarEntity> {
    return this.http.get<LugarEntity>(this.apiUrl + "/" + idLugar);
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
  
    return this.http.get<LugarEntity[]>(this.apiUrl + "/filters", {
      params: paramsFilter
    });
  }
}
