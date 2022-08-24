import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from './../../shared/models/produto.model';
import { ProdutoService } from './../../shared/service/produto.service';
import { CadastraProdutoComponent } from './../cadastra-produto/cadastra-produto.component';
import { DeletaProdutoComponent } from './../deleta-produto/deleta-produto.component';
import { EditaProdutoComponent } from './../edita-produto/edita-produto.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss'],
})
export class ListaProdutoComponent implements OnInit {
  produtos: Produto[];

  constructor(public dialog: MatDialog, private rest: ProdutoService) {}

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
      minHeight: '200px',
    });
    dialogAdd.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  editProduto(produto: Produto): void {
    const dialogEdit = this.dialog.open(EditaProdutoComponent, {
      minWidth: '550px',
      minHeight: '300px',
      data: {
        id: produto.id,
        descricao: produto.descricao,
      },
    });
    dialogEdit.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteProduto(id: any): void {
    const dialogDelete = this.dialog.open(DeletaProdutoComponent, {
      minWidth: '500px',
      minHeight: '150',
      data: {
        id: id,
      },
    });
    dialogDelete.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
