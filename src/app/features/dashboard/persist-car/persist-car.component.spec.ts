import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistCarComponent } from './persist-car.component';

describe('PersistCarComponent', () => {
  let component: PersistCarComponent;
  let fixture: ComponentFixture<PersistCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersistCarComponent]
    });
    fixture = TestBed.createComponent(PersistCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
