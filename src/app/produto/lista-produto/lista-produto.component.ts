import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from './../../shared/models/produto.model';
import { ProdutoService } from './../../shared/service/produto.service';
import { CadastraProdutoComponent } from './../cadastra-produto/cadastra-produto.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss'],
})
export class ListaProdutoComponent implements OnInit {
  produtos: Produto[];
  public dialog: MatDialog;

  constructor(private rest: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    return this.rest.getProdutos().subscribe((data) => {
      this.produtos = JSON.parse(JSON.stringify(data));
    });
  }

  addProduto(): void {
    const dialogAdd = this.dialog.open(CadastraProdutoComponent, {
      minWidth: '550px',
      minHeight: '300px',
    });
    dialogAdd.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
