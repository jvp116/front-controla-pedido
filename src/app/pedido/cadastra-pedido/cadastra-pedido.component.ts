import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { Cliente } from './../../shared/models/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';
import { PedidoService } from './../../shared/service/pedido.service';

@Component({
  selector: 'app-cadastra-pedido',
  templateUrl: './cadastra-pedido.component.html',
  styleUrls: ['./cadastra-pedido.component.scss'],
})
export class CadastraPedidoComponent implements OnInit {
  public pedidoForm: FormGroup;
  cliente: Cliente;
  nomes: string[] = [];
  filteredNomes: string[] = [];
  meetCliente: boolean;
  disableInputNome: boolean;

  constructor(
    private fb: FormBuilder,
    private rest: PedidoService,
    private clienteService: ClienteService,
    public dialogAdd: MatDialogRef<CadastraPedidoComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getNamesClientes();
  }

  createPedido() {
    this.rest.postPedido(this.pedidoForm.value).subscribe((result) => {});
    this.closeModal();
  }

  initForm() {
    this.pedidoForm = this.fb.group({
      nome: ['', [Validators.required]],
      produtos: [''],
    });
    this.pedidoForm
      .get('nome')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((response) => {
        if (response && response.length) {
          this.filterData(response);
        } else {
          this.filteredNomes = [];
          this.meetCliente = false;
        }
      });
  }

  filterData(enteredData: string) {
    this.filteredNomes = this.nomes.filter((item) => {
      if (item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1) {
        this.meetCliente = true;
      }
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  getNamesClientes() {
    this.clienteService.getNames().subscribe((response) => {
      this.nomes = response;
    });
  }

  getClienteByName() {
    this.clienteService
      .getClienteByName(this.pedidoForm.get('nome')?.value)
      .subscribe((result) => {
        this.cliente = result;
        if (this.cliente) {
          this.disableInputNome = true;
          this.meetCliente = false;
        }
      });
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.pedidoForm.reset();
  }
}
