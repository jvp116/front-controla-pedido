import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { formatCPF } from '@brazilian-utils/brazilian-utils';
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
  cpfs: string[] = [];
  filteredCpfs: string[] = [];
  meetCpf: boolean;
  disableInputCpf: boolean;

  constructor(
    private fb: FormBuilder,
    private rest: PedidoService,
    private clienteService: ClienteService,
    public dialogAdd: MatDialogRef<CadastraPedidoComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCpfClientes();
  }

  createPedido() {
    this.rest.postPedido(this.pedidoForm.value).subscribe((result) => {});
    this.closeModal();
  }

  initForm() {
    this.pedidoForm = this.fb.group({
      cpf: ['', [Validators.required]],
      produtos: [''],
    });
    this.pedidoForm
      .get('cpf')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((response) => {
        if (response && response.length) {
          this.filterData(response);
        } else {
          this.filteredCpfs = [];
          this.meetCpf = false;
        }
      });
  }

  filterData(enteredData: string) {
    this.filteredCpfs = this.cpfs.filter((item) => {
      if (item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1) {
        this.meetCpf = true;
      }
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  getCpfClientes() {
    this.clienteService.getCpfs().subscribe((response) => {
      this.cpfs = response;
    });
  }

  getClienteByCpf() {
    this.clienteService
      .getClienteByCpf(this.pedidoForm.get('cpf')?.value)
      .subscribe((result) => {
        this.cliente = result;
        if (this.cliente) {
          this.disableInputCpf = true;
          this.meetCpf = false;
        }
      });
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.pedidoForm.reset();
  }
}
