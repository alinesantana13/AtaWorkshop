import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtadepresencaComponent } from './atadepresenca.component';

describe('AtadepresencaComponent', () => {
  let component: AtadepresencaComponent;
  let fixture: ComponentFixture<AtadepresencaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtadepresencaComponent]
    });
    fixture = TestBed.createComponent(AtadepresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
