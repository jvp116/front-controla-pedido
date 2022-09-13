import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './../shared/modules/material/material.module';
import { CadastraPedidoComponent } from './cadastra-pedido/cadastra-pedido.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';

@NgModule({
  declarations: [ListaPedidoComponent, CadastraPedidoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class PedidoModule {}
