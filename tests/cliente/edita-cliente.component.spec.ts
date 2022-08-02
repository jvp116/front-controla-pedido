import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaClienteComponent } from '../../src/app/cliente/edita-cliente/edita-cliente.component';

describe('EditaClienteComponent', () => {
  let component: EditaClienteComponent;
  let fixture: ComponentFixture<EditaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaClienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
