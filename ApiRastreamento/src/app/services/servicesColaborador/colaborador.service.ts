import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../models/response';
import { Colaborador } from '../../models/colaboradores';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = `${environment.ApiUrl}/colaboradores`;

  constructor(private http: HttpClient) { }

  GetColaboradores(): Observable<Response<Colaborador[]>> {
    return this.http.get<Response<Colaborador[]>>(this.apiUrl);
  }

  GetColaborador(id: number): Observable<Response<Colaborador>> {
    return this.http.get<Response<Colaborador>>(`${this.apiUrl}/${id}`);
  }

  CreateColaborador(colaborador: Colaborador): Observable<Response<Colaborador[]>> {
    return this.http.post<Response<Colaborador[]>>(`${this.apiUrl}`, colaborador);
  }

  EditarColaborador(colaborador : Colaborador) : Observable<Response<Colaborador[]>> {
    return this.http.put<Response<Colaborador[]>>(`${this.apiUrl}`, colaborador);
  }

  ExcluirColaborador(colaborador: Colaborador) : Observable<Response<Colaborador[]>>{
    return this.http.delete<Response<Colaborador[]>>(`${this.apiUrl}?id=${colaborador.id}`);
  }

}
