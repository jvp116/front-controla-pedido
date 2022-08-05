import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  resultClientes: Cliente[] = [];
  element: Cliente;
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private rest: ClienteService
  ) {}

  ngOnInit(): void {
    this.getClientes();
    this.formSearchCliente();
  }

  formSearchCliente() {
    this.searchForm = this.fb.group({
      nomeCliente: [],
    });
  }

  searchClienteByNome() {
    const resultSearch = JSON.stringify(this.searchForm.value);
    console.log(resultSearch);
    if (!resultSearch.includes('null')) {
      this.clientes.forEach((element) => {
        if (resultSearch.includes(element.nome)) {
          this.resultClientes.push(element);
          this.clientes = this.resultClientes;
        }
      });
    } else {
      this.getClientes();
      this.resultClientes = [];
    }
    this.searchForm.reset();
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
