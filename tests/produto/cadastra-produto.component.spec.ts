import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastraProdutoComponent } from '../../src/app/produto/cadastra-produto/cadastra-produto.component';

describe('CadastraProdutoComponent', () => {
  let component: CadastraProdutoComponent;
  let fixture: ComponentFixture<CadastraProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastraProdutoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastraProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
