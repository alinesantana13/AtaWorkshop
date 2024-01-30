import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCadastroComponent } from './workshop-cadastro.component';

describe('WorkshopCadastroComponent', () => {
  let component: WorkshopCadastroComponent;
  let fixture: ComponentFixture<WorkshopCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopCadastroComponent]
    });
    fixture = TestBed.createComponent(WorkshopCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
