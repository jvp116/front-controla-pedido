import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemPedido } from './../../shared/models/itemPedido.model';
import { Pedido } from './../../shared/models/pedido.model';
import { PedidoService } from './../../shared/service/pedido.service';
import { CadastraPedidoComponent } from './../cadastra-pedido/cadastra-pedido.component';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss'],
})
export class ListaPedidoComponent implements OnInit {
  pedidos: Pedido[];
  itens: ItemPedido[];

  constructor(public dialog: MatDialog, private rest: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos() {
    return this.rest.getPedidos().subscribe((data) => {
      this.pedidos = JSON.parse(JSON.stringify(data));
      this.pedidos.forEach((element) => {
        this.itens = element.itens;
      });
    });
  }

  addPedido(): void {
    const dialogAdd = this.dialog.open(CadastraPedidoComponent, {
      minWidth: '550px',
      minHeight: '550px',
    });
    dialogAdd.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  // deletePedido(id: any): void {
  //   const dialogDelete = this.dialog.open(DeletaPedidoComponent, {
  //     minWidth: '500px',
  //     minHeight: '150',
  //     data: {
  //       id: id,
  //     },
  //   });
  //   dialogDelete.afterClosed().subscribe((result) => {
  //     this.ngOnInit();
  //   });
  // }
}
