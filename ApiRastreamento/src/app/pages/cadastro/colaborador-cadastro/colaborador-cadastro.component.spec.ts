import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorCadastroComponent } from './colaborador-cadastro.component';

describe('ColaboradorCadastroComponent', () => {
  let component: ColaboradorCadastroComponent;
  let fixture: ComponentFixture<ColaboradorCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboradorCadastroComponent]
    });
    fixture = TestBed.createComponent(ColaboradorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
