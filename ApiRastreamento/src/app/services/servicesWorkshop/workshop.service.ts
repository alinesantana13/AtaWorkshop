import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from 'src/app/models/workshops';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  private apiUrl = `${environment.ApiUrl}/workshops`;

  constructor(private http: HttpClient) { }

  GetWorshops(): Observable<Workshop[]>{
    return this.http.get<Workshop[]>(this.apiUrl);
  }

  GetWorshop(id: number): Observable<Workshop>{
    return this.http.get<Workshop>(`${this.apiUrl}/${id}`);
  }

  CreateWorkshop(workshop: Workshop){
    return this.http.post(`${this.apiUrl}`, workshop);
  }

  EditarWorkshop(workshop: Workshop){
    return this.http.put(`${this.apiUrl}`, workshop);
  }

  ExcluirColaborador(workshop: Workshop){
    return this.http.delete(`${this.apiUrl}?id=${workshop.id}`);
  }
}
