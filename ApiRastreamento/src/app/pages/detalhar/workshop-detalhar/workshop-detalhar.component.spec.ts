import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDetalharComponent } from './workshop-detalhar.component';

describe('WorkshopDetalharComponent', () => {
  let component: WorkshopDetalharComponent;
  let fixture: ComponentFixture<WorkshopDetalharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopDetalharComponent]
    });
    fixture = TestBed.createComponent(WorkshopDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
