import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { ClienteService } from './../../shared/service/cliente.service';
import { PedidoService } from './../../shared/service/pedido.service';

@Component({
  selector: 'app-cadastra-pedido',
  templateUrl: './cadastra-pedido.component.html',
  styleUrls: ['./cadastra-pedido.component.scss'],
})
export class CadastraPedidoComponent implements OnInit {
  public pedidoForm: FormGroup;
  options: string[] = [];
  filteredOptions: string[] = [];

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
          this.filteredOptions = [];
        }
      });
  }

  filterData(enteredData: string) {
    this.filteredOptions = this.options.filter((item) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  getNamesClientes() {
    this.clienteService.getNames().subscribe((response) => {
      this.options = response;
    });
  }
  getNames() {
    this.clienteService.getClientes().subscribe((response) => {});
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.pedidoForm.reset();
  }
}
