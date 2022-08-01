import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
@NgModule({
  declarations: [AppComponent, CadastroClienteComponent, ListaClienteComponent, ListaProdutoComponent, ListaPedidoComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
