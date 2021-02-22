import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listar = (type: string) => {
    return this.http.get<any[]>(`${this.API}/${type}`).pipe(delay(2000));
  }

  adicionar = (obj: any, type: string,) => {
    return this.http.post<any>(`${this.API}/${type}`, obj).pipe(take(1));
  }

  loadById(obj: string, id?: number){
    if(id){
      return this.http.get<any>(`${this.API}/${obj}/${id}`).pipe(take(1));
    } else {
      return this.http.get<any>(`${this.API}/${obj}`).pipe(take(1));
    }
  }

  update(obj: string, target: any){
    return this.http.put<any>(`${this.API}/${obj}/${target.id}`, target).pipe(take(1));
  }

  remove(obj: string, id: number){
    return this.http.delete<any>(`${this.API}/${obj}/${id}`).pipe(take(1));
  }
}
