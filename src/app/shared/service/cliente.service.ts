import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';
import { Clientes } from './../models/clientes.model';

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

  // Obter Cliente por Nome
  public getClienteByName(nome: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(
      this.apiUrl + '/nome/' + nome,
      this.httpOptions
    );
  }

  // Obter Nomes dos Clientes
  public getNames() {
    return this.httpClient
      .get<Cliente[]>(this.apiUrl, this.httpOptions)
      .pipe(map((response: Cliente[]) => response.map((item) => item['nome'])));
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
    return this.httpClient.put<Cliente>(
      this.apiUrl + '/' + cliente.id,
      body,
      this.httpOptions
    );
  }

  // Deletar Cliente
  public deleteCliente(id: any): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(
      this.apiUrl + '/' + id,
      this.httpOptions
    );
  }
}
