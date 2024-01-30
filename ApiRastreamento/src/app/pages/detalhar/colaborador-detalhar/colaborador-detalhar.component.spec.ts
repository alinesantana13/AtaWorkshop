import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDetalharComponent } from './colaborador-detalhar.component';

describe('ColaboradorDetalharComponent', () => {
  let component: ColaboradorDetalharComponent;
  let fixture: ComponentFixture<ColaboradorDetalharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboradorDetalharComponent]
    });
    fixture = TestBed.createComponent(ColaboradorDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
