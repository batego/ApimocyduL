import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AreasFormComponent } from './areas-form.component';

describe('AreasFormComponent', () => {
  let component: AreasFormComponent;
  let fixture: ComponentFixture<AreasFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
