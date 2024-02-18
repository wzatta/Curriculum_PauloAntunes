import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremimComponent } from './sobremim.component';

describe('SobremimComponent', () => {
  let component: SobremimComponent;
  let fixture: ComponentFixture<SobremimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobremimComponent]
    });
    fixture = TestBed.createComponent(SobremimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
