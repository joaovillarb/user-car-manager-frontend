import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistUserComponent } from './persist-user.component';

describe('CreateComponent', () => {
  let component: PersistUserComponent;
  let fixture: ComponentFixture<PersistUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersistUserComponent]
    });
    fixture = TestBed.createComponent(PersistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should persist-user', () => {
    expect(component).toBeTruthy();
  });
});
