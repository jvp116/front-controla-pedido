import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from './../../shared/model/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';
import { CadastroClienteComponent } from './../cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss'],
})
export class EditaClienteComponent implements OnInit {
  public clienteForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private fb: FormBuilder,
    public dialogEdit: MatDialogRef<CadastroClienteComponent>,
    private rest: ClienteService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.clienteForm = this.fb.group({
      nome: [this.data.nome],
      sobrenome: [this.data.sobrenome],
    });
  }

  alterClient() {
    this.rest.putCliente(this.clienteForm.value).subscribe((result) => {});
    this.closeModal();
  }

  closeModal(): void {
    this.dialogEdit.close();
    this.clienteForm.reset();
  }
}
