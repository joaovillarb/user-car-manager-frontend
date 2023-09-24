import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponent } from './list-user.component';

describe('ListUsersComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserComponent]
    });
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should persist-user', () => {
    expect(component).toBeTruthy();
  });
});
