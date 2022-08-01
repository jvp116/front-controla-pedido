import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss'],
})
export class ListaClienteComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addCliente(): void {
    const dialogRef = this.dialog.open(CadastroClienteComponent, {
      minWidth: '500px',
      minHeight: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      //
    });
  }
}
