import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './../shared/modules/material/material.module';
import { CadastraClienteComponent } from './cadastra-cliente/cadastra-cliente.component';
import { DeletaClienteComponent } from './deleta-cliente/deleta-cliente.component';
import { EditaClienteComponent } from './edita-cliente/edita-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';

@NgModule({
  declarations: [
    CadastraClienteComponent,
    DeletaClienteComponent,
    EditaClienteComponent,
    ListaClienteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ClienteModule {}
