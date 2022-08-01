import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  apiUrl = 'http://localhost:8080/clientes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public postCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      this.apiUrl,
      cliente,
      this.httpOptions
    );
  }
}
