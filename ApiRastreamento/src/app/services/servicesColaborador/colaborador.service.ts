import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../../models/colaboradores';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = `${environment.ApiUrl}/colaboradores`;

  constructor(private http: HttpClient) { }

  GetColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.apiUrl);
  }

  GetColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}/${id}`);
  }

  CreateColaborador(colaborador: Colaborador) {
    return this.http.post(`${this.apiUrl}`, colaborador);
  }

  EditarColaborador(colaborador : Colaborador) {
    return this.http.put(`${this.apiUrl}`, colaborador);
  }

  ExcluirColaborador(colaborador: Colaborador){
    return this.http.delete(`${this.apiUrl}?id=${colaborador.id}`);
  }

}
