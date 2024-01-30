import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtadepresencaFormComponent } from './atadepresenca-form.component';

describe('AtadepresencaFormComponent', () => {
  let component: AtadepresencaFormComponent;
  let fixture: ComponentFixture<AtadepresencaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtadepresencaFormComponent]
    });
    fixture = TestBed.createComponent(AtadepresencaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
