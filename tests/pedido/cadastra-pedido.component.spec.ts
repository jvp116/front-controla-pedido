import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastraPedidoComponent } from '../../src/app/pedido/cadastra-pedido/cadastra-pedido.component';

describe('CadastraPedidoComponent', () => {
  let component: CadastraPedidoComponent;
  let fixture: ComponentFixture<CadastraPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastraPedidoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastraPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
