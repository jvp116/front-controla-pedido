import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletaClienteComponent } from '../../src/app/cliente/deleta-cliente/deleta-cliente.component';

describe('DeletaClienteComponent', () => {
  let component: DeletaClienteComponent;
  let fixture: ComponentFixture<DeletaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletaClienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
