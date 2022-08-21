import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CadastraClienteComponent } from '../cadastra-cliente/cadastra-cliente.component';
import { Cliente } from '../../shared/models/cliente.model';
import { ClienteService } from './../../shared/service/cliente.service';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss'],
})
export class EditaClienteComponent implements OnInit {
  public clienteForm: FormGroup;
  validaEditCliente: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private fb: FormBuilder,
    public dialogEdit: MatDialogRef<CadastraClienteComponent>,
    private rest: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nome: [this.data.nome, Validators.required],
      sobrenome: [this.data.sobrenome, Validators.required],
    });
  }

  alterClient() {
    if (
      this.clienteForm.value['nome'] != this.data.nome ||
      this.clienteForm.value['sobrenome'] != this.data.sobrenome
    ) {
      this.data.nome = this.clienteForm.value['nome'];
      this.data.sobrenome = this.clienteForm.value['sobrenome'];

      this.rest.putCliente(this.data).subscribe((result) => {});
      this.closeModal();
    } else {
      this.validaEditCliente = true;
      setTimeout(() => {
        this.validaEditCliente = false;
      }, 4000);
    }
  }

  closeModal(): void {
    this.dialogEdit.close();
    this.clienteForm.reset();
  }
}
