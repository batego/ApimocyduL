import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsuariosFormComponent } from './usuarios-form.component';

describe('UsuariosFormComponent', () => {
  let component: UsuariosFormComponent;
  let fixture: ComponentFixture<UsuariosFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
