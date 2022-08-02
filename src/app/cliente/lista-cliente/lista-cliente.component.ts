import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
import { Cliente } from './../../shared/model/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';
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
      { id: '1', cpf: '123.456.789-10', nome: 'userA', sobrenome: 'Oliveira' },
      { id: '2', cpf: '987.654.321-00', nome: 'UserB', sobrenome: 'Santos' },
    ];
  }

  addCliente(): void {
    const dialogAdd = this.dialog.open(CadastroClienteComponent, {
      minWidth: '500px',
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
      minWidth: '500px',
      minHeight: '300px',
      data: {
        cpf: this.element.cpf,
        nome: this.element.nome,
        sobrenome: this.element.sobrenome,
      },
    });

    dialogEdit.afterClosed().subscribe((result) => {});
  }
}
