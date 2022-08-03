import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastraClienteComponent } from '../cadastra-cliente/cadastra-cliente.component';
import { Cliente } from './../../shared/model/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';
import { DeletaClienteComponent } from './../deleta-cliente/deleta-cliente.component';
import { EditaClienteComponent } from './../edita-cliente/edita-cliente.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss'],
})
export class ListaClienteComponent implements OnInit {
  clientes: Cliente[];
  element: Cliente;

  constructor(public dialog: MatDialog, private rest: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    // this.rest.getClientes().subscribe((data) => {
    //   this.clientes = data.clientes;
    // });
    this.clientes = [
      { id: '1', cpf: '12345678910', nome: 'userA', sobrenome: 'Oliveira' },
      { id: '2', cpf: '98765432100', nome: 'UserB', sobrenome: 'Santos' },
    ];
  }

  addCliente(): void {
    const dialogAdd = this.dialog.open(CadastraClienteComponent, {
      minWidth: '550px',
      minHeight: '300px',
    });
    dialogAdd.afterClosed().subscribe((result) => {});
  }

  editCliente(id: string): void {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id == id) {
        this.element = this.clientes[i];
      }
    }

    const dialogEdit = this.dialog.open(EditaClienteComponent, {
      minWidth: '550px',
      minHeight: '300px',
      data: {
        cpf: this.element.cpf,
        nome: this.element.nome,
        sobrenome: this.element.sobrenome,
      },
    });
    dialogEdit.afterClosed().subscribe((result) => {});
  }

  deleteCliente(id: string): void {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id == id) {
        this.element = this.clientes[i];
      }
    }

    const dialogDelete = this.dialog.open(DeletaClienteComponent, {
      minWidth: '500px',
      minHeight: '150',
      data: {
        id: this.element.id,
      },
    });
    dialogDelete.afterClosed().subscribe((result) => {});
  }
}
