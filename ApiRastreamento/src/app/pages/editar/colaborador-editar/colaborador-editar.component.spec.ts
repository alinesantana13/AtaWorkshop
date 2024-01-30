import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorEditarComponent } from './colaborador-editar.component';

describe('ColaboradorEditarComponent', () => {
  let component: ColaboradorEditarComponent;
  let fixture: ComponentFixture<ColaboradorEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboradorEditarComponent]
    });
    fixture = TestBed.createComponent(ColaboradorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
