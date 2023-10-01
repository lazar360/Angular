import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingsRelaisComponent } from './parkings-relais.component';

describe('ParkingsRelaisComponent', () => {
  let component: ParkingsRelaisComponent;
  let fixture: ComponentFixture<ParkingsRelaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingsRelaisComponent]
    });
    fixture = TestBed.createComponent(ParkingsRelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
