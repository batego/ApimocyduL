import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperUserComponent } from './oper-user.component';

describe('OperUserComponent', () => {
  let component: OperUserComponent;
  let fixture: ComponentFixture<OperUserComponent>;

  beforeEach(async(() => {
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
