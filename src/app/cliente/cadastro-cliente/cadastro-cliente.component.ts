import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from './../../shared/service/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
})
export class CadastroClienteComponent implements OnInit {
  public clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: ClienteService,
    public dialogRef: MatDialogRef<CadastroClienteComponent>
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
    });
  }

  createClient() {
    this.rest.postCliente(this.clienteForm.value).subscribe((result) => {});
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
    this.clienteForm.reset();
  }
}
