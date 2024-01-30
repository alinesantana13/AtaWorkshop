import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtaDePresenca } from 'src/app/models/ataDePresenca';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AtaDePresencaService {

  private apiUrl = `${environment.ApiUrl}/atadepresenca`;

  constructor(private http: HttpClient) { }

  GetAtasDePresenca(id: number): Observable<AtaDePresenca[]>{
    return this.http.get<AtaDePresenca[]>(`${this.apiUrl}/workshopId?workshopId=${id}`);
  }

  GetAtasDePresencaColaboradores(id: number): Observable<AtaDePresenca[]>{
    return this.http.get<AtaDePresenca[]>(`${this.apiUrl}/colaboradorId?colboradorId=${id}`);
  }

  GetAtaDePresenca(id: number): Observable<AtaDePresenca>{
    return this.http.get<AtaDePresenca>(`${this.apiUrl}/${id}`);
  }

  CreateAtaDePresenca(ataDePresenca: AtaDePresenca){
    return this.http.post(`${this.apiUrl}?workshopId=${ataDePresenca.workshopId}&colaboradorId=${ataDePresenca.colaboradorId}`, ataDePresenca);
  }

  EditarAtaDePresenca(ataDePresenca: AtaDePresenca){
    return this.http.put(`${this.apiUrl}`, ataDePresenca);
  }

  ExcluirAtaDePresenca(ataDePresenca: AtaDePresenca){
    return this.http.delete(`${this.apiUrl}?id=${ataDePresenca.id}`);
  }
}
