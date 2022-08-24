import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from './../../shared/models/produto.model';
import { ProdutoService } from './../../shared/service/produto.service';
import { CadastraProdutoComponent } from './../cadastra-produto/cadastra-produto.component';

@Component({
  selector: 'app-deleta-produto',
  templateUrl: './deleta-produto.component.html',
  styleUrls: ['./deleta-produto.component.scss'],
})
export class DeletaProdutoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    public dialogDelete: MatDialogRef<CadastraProdutoComponent>,
    private rest: ProdutoService
  ) {}

  ngOnInit(): void {}

  removeProduto() {
    this.rest.deleteProduto(this.data.id).subscribe((result) => {});
    this.closeModal();
  }

  closeModal(): void {
    this.dialogDelete.close();
  }
}
