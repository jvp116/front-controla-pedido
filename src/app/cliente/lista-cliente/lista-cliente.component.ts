import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../../shared/models/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';
import { CadastraClienteComponent } from './../cadastra-cliente/cadastra-cliente.component';
import { DeletaClienteComponent } from './../deleta-cliente/deleta-cliente.component';
import { EditaClienteComponent } from './../edita-cliente/edita-cliente.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss'],
})
export class ListaClienteComponent implements OnInit {
  clientes: Cliente[];

  constructor(public dialog: MatDialog, private rest: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    return this.rest.getClientes().subscribe((data) => {
      this.clientes = JSON.parse(JSON.stringify(data));
    });
  }

  addCliente(): void {
    const dialogAdd = this.dialog.open(CadastraClienteComponent, {
      minWidth: '550px',
      minHeight: '300px',
    });
    dialogAdd.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  editCliente(cliente: Cliente): void {
    const dialogEdit = this.dialog.open(EditaClienteComponent, {
      minWidth: '550px',
      minHeight: '300px',
      data: {
        id: cliente.id,
        cpf: cliente.cpf,
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
      },
    });
    dialogEdit.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteCliente(id: any): void {
    const dialogDelete = this.dialog.open(DeletaClienteComponent, {
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
