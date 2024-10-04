import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

var apiUrl = "https://localhost:7069/api/EnterpriseClient";

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private http: HttpClient) {}

  getAllEnterpriseClients(): Observable<any> {
    return this.http.get(apiUrl);
  }

  getEnterpriseClientDetailById(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }

  createEnterpriseClient(data: { enterpriseClientName: string; enterpriseScale: string; }): Observable<any> {
    return this.http.post(apiUrl, data);
  }

  saveEnterpriseClient(data: { enterpriseClientName: string; enterpriseScale: string; }): Observable<any> {
    return this.http.put(`${apiUrl}`, data);
  }

  deleteEnterpriseClientById(id: string): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}
