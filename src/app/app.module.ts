import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { ProdutoModule } from './produto/produto.module';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [AppComponent, ListaPedidoComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    ClienteModule,
    ProdutoModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
