import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletaProdutoComponent } from '../../src/app/produto/deleta-produto/deleta-produto.component';

describe('DeletaProdutoComponent', () => {
  let component: DeletaProdutoComponent;
  let fixture: ComponentFixture<DeletaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletaProdutoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
