import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';
import { Clientes } from './../model/clientes.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  apiUrl = 'http://localhost:8080/clientes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // Listar Clientes
  public getClientes(): Observable<Clientes> {
    return this.httpClient.get<Clientes>(this.apiUrl, this.httpOptions);
  }

  // Cadastrar Cliente
  public postCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      this.apiUrl,
      cliente,
      this.httpOptions
    );
  }

  // Editar Cliente
  public putCliente(cliente: Cliente): Observable<Cliente> {
    const body = { nome: cliente.nome, sobrenome: cliente.sobrenome };
    return this.httpClient.put<Cliente>(this.apiUrl, body, this.httpOptions);
  }

  // Deletar Cliente
  public deleteCliente(): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(this.apiUrl, this.httpOptions);
  }
}
