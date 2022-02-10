import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitProfileComponent } from './patient-visit-profile.component';

describe('PatientVisitProfileComponent', () => {
  let component: PatientVisitProfileComponent;
  let fixture: ComponentFixture<PatientVisitProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVisitProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
