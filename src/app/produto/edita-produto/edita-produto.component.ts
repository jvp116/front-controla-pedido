import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from './../../shared/models/produto.model';
import { ProdutoService } from './../../shared/service/produto.service';
import { CadastraProdutoComponent } from './../cadastra-produto/cadastra-produto.component';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss'],
})
export class EditaProdutoComponent implements OnInit {
  public produtoForm: FormGroup;
  validaEditProduto: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    private fb: FormBuilder,
    public dialogEdit: MatDialogRef<CadastraProdutoComponent>,
    private rest: ProdutoService
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      descricao: [this.data.descricao, Validators.required],
    });
  }

  alterProduto() {
    if (this.produtoForm.value['descricao'] != this.data.descricao) {
      this.data.descricao = this.produtoForm.value['descricao'];

      this.rest.putProduto(this.data).subscribe((result) => {});
      this.closeModal();
    } else {
      this.validaEditProduto = true;
      setTimeout(() => {
        this.validaEditProduto = false;
      }, 4000);
    }
  }

  closeModal(): void {
    this.dialogEdit.close();
    this.produtoForm.reset();
  }
}
