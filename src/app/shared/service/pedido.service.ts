import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './../models/pedido.model';
import { Pedidos } from './../models/pedidos.model';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  apiUrl = 'http://localhost:8080/pedidos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // Listar Pedidos
  public getPedidos(): Observable<Pedidos> {
    return this.httpClient.get<Pedidos>(this.apiUrl, this.httpOptions);
  }

  // Cadastrar Pedido
  public postPedido(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.apiUrl, pedido, this.httpOptions);
  }

  // Deletar Pedido
  public deletePedido(id: any): Observable<Pedido> {
    return this.httpClient.delete<Pedido>(
      this.apiUrl + '/' + id,
      this.httpOptions
    );
  }
}
