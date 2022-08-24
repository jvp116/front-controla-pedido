import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaProdutoComponent } from '../../src/app/produto/edita-produto/edita-produto.component';

describe('EditaProdutoComponent', () => {
  let component: EditaProdutoComponent;
  let fixture: ComponentFixture<EditaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaProdutoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
