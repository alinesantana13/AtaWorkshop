import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopEditarComponent } from './workshop-editar.component';

describe('WorkshopEditarComponent', () => {
  let component: WorkshopEditarComponent;
  let fixture: ComponentFixture<WorkshopEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopEditarComponent]
    });
    fixture = TestBed.createComponent(WorkshopEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
