import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LugarEntity } from './lugar-entity';
import { Observable } from 'rxjs';

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
    return this.http.get<LugarEntity>("http://localhost:8080/categorias/" + idLugar);
  }
}
