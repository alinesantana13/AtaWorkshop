import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from 'src/app/models/workshops';
import { environment } from 'src/environments/environment.development';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  private apiUrl = `${environment.ApiUrl}/workshops`;

  constructor(private http: HttpClient) { }

  GetWorshops(): Observable<Response<Workshop[]>>{
    return this.http.get<Response<Workshop[]>>(this.apiUrl);
  }

  GetWorshop(id: number): Observable<Response<Workshop>>{
    return this.http.get<Response<Workshop>>(`${this.apiUrl}/${id}`);
  }

  CreateWorkshop(workshop: Workshop): Observable<Response<Workshop[]>>{
    return this.http.post<Response<Workshop[]>>(`${this.apiUrl}`, workshop);
  }

  EditarWorkshop(workshop: Workshop): Observable<Response<Workshop[]>>{
    return this.http.put<Response<Workshop[]>>(`${this.apiUrl}`, workshop);
  }

  ExcluirColaborador(workshop: Workshop): Observable<Response<Workshop[]>>{
    return this.http.delete<Response<Workshop[]>>(`${this.apiUrl}?id=${workshop.id}`);
  }
}
