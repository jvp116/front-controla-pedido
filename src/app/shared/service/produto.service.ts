import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './../models/produto.model';
import { Produtos } from './../models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  apiUrl = 'http://localhost:8080/produtos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // Listar Produtos
  public getProdutos(): Observable<Produtos> {
    return this.httpClient.get<Produtos>(this.apiUrl, this.httpOptions);
  }

  // Cadastrar Produto
  public postProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(
      this.apiUrl,
      produto,
      this.httpOptions
    );
  }

  // Editar Produto
  public putProduto(produto: Produto): Observable<Produto> {
    const body = { descricao: produto.descricao };
    return this.httpClient.put<Produto>(
      this.apiUrl + '/' + produto.id,
      body,
      this.httpOptions
    );
  }

  // Deletar Produto
  public deleteProduto(id: any): Observable<Produto> {
    return this.httpClient.delete<Produto>(
      this.apiUrl + '/' + id,
      this.httpOptions
    );
  }
}
