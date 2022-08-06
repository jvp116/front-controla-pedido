import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from './../../shared/model/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';
import { CadastraClienteComponent } from './../cadastra-cliente/cadastra-cliente.component';

@Component({
  selector: 'app-deleta-cliente',
  templateUrl: './deleta-cliente.component.html',
  styleUrls: ['./deleta-cliente.component.scss'],
})
export class DeletaClienteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    public dialogDelete: MatDialogRef<CadastraClienteComponent>,
    private rest: ClienteService
  ) {}

  ngOnInit(): void {}

  removeCliente() {
    this.rest.deleteCliente(this.data.id).subscribe((result) => {});
    this.closeModal();
  }

  closeModal(): void {
    this.dialogDelete.close();
  }
}
