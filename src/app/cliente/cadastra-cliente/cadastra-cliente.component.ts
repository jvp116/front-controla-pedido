import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { isValidCPF } from '@brazilian-utils/brazilian-utils';
import { ClienteService } from '../../shared/service/cliente.service';
@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss'],
})
export class CadastraClienteComponent implements OnInit {
  public clienteForm: FormGroup;
  validaCpfCliente: boolean = false;

  constructor(
    private fb: FormBuilder,
    private rest: ClienteService,
    public dialogAdd: MatDialogRef<CadastraClienteComponent>
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
    });
  }

  createCliente() {
    if (isValidCPF(this.clienteForm.get('cpf')?.value)) {
      this.rest.postCliente(this.clienteForm.value).subscribe((result) => {});
      this.closeModal();
    } else {
      this.errorCpf();
    }
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.clienteForm.reset();
  }

  errorCpf(): void {
    this.validaCpfCliente = true;
    setTimeout(() => {
      this.validaCpfCliente = false;
    }, 4000);
  }
}
