import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OperUserComponent } from './oper-user.component';

describe('OperUserComponent', () => {
  let component: OperUserComponent;
  let fixture: ComponentFixture<OperUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OperUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
