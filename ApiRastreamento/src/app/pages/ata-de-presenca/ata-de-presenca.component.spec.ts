import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaDePresencaComponent } from './ata-de-presenca.component';

describe('AtaDePresencaComponent', () => {
  let component: AtaDePresencaComponent;
  let fixture: ComponentFixture<AtaDePresencaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtaDePresencaComponent]
    });
    fixture = TestBed.createComponent(AtaDePresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
