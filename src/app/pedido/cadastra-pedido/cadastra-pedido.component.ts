import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
  clienteAux: Observable<any>;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private rest: PedidoService,
    private clienteService: ClienteService,
    public dialogAdd: MatDialogRef<CadastraPedidoComponent>
  ) {}

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      cpf: ['', [Validators.required]],
      produtos: [''],
    });
  }

  createPedido() {
    this.rest.postPedido(this.pedidoForm.value).subscribe((result) => {});
    this.closeModal();
  }

  getClienteByCpf() {
    this.clienteService
      .getClienteByCpf(this.pedidoForm.get('cpf')?.value)
      .subscribe((result) => {
        this.cliente = result;
      });
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.pedidoForm.reset();
  }
}
