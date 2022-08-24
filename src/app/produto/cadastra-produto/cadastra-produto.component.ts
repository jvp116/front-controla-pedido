import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from './../../shared/service/produto.service';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.scss'],
})
export class CadastraProdutoComponent implements OnInit {
  public produtoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: ProdutoService,
    public dialogAdd: MatDialogRef<CadastraProdutoComponent>
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      descricao: ['', [Validators.required]],
    });
  }

  createProduto() {
    this.rest.postProduto(this.produtoForm.value).subscribe((result) => {});
    this.closeModal();
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.produtoForm.reset();
  }
}
