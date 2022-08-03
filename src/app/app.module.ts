import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraClienteComponent } from './cliente/cadastra-cliente/cadastra-cliente.component';
import { EditaClienteComponent } from './cliente/edita-cliente/edita-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { DeletaClienteComponent } from './cliente/deleta-cliente/deleta-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastraClienteComponent,
    ListaClienteComponent,
    ListaProdutoComponent,
    ListaPedidoComponent,
    EditaClienteComponent,
    DeletaClienteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
