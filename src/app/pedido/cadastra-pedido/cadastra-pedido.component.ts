import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import $ from 'jquery';
import { debounceTime } from 'rxjs';
import { Cliente } from './../../shared/models/cliente.model';
import { ItemPedido } from './../../shared/models/itemPedido.model';
import { Pedido } from './../../shared/models/pedido.model';
import { Produto } from './../../shared/models/produto.model';
import { ClienteService } from './../../shared/service/cliente.service';
import { PedidoService } from './../../shared/service/pedido.service';
import { ProdutoService } from './../../shared/service/produto.service';
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
  produtos: Produto[];
  itemPedido: ItemPedido;
  itensPedido: ItemPedido[] = [];
  qtdProduto: any;
  validaQtd: boolean;

  constructor(
    private fb: FormBuilder,
    private rest: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    public dialogAdd: MatDialogRef<CadastraPedidoComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCpfClientes();
    this.getProdutos();
  }

  createItemPedido(id: string) {
    if ($('#idProd' + id).is(':checked')) {
      var itemPedido = new ItemPedido();
      this.produtos.forEach((produto) => {
        if (id == produto.id) {
          itemPedido.produto = produto;
          this.qtdProduto = $('#idQtdProd' + id).val();
          if (this.qtdProduto < 1 || this.qtdProduto > 100) {
            this.validaQtd = true;
            setTimeout(() => {
              this.validaQtd = false;
            }, 4000);
          } else {
            itemPedido.quantidade = this.qtdProduto;
            this.itensPedido.push(itemPedido);
          }
        }
      });
    } else {
      for (let i = 0; i < this.itensPedido.length; i++) {
        if (id == this.itensPedido[i].produto.id) {
          this.itensPedido.splice(i, 1);
        }
      }
    }
  }

  createPedido() {
    let pedido = new Pedido();
    pedido.data = formatDate(new Date(), 'dd/MM/yyyy HH:mm:ss', 'pt-BR');
    pedido.cliente = this.cliente;
    pedido.itens = this.itensPedido;
    console.log(pedido);

    this.rest.postPedido(pedido).subscribe((result) => {});
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

  getProdutos() {
    return this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = JSON.parse(JSON.stringify(data));
    });
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.pedidoForm.reset();
  }
}
