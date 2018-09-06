import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedellinComponent } from './registro-medellin.component';

describe('RegistroMedellinComponent', () => {
  let component: RegistroMedellinComponent;
  let fixture: ComponentFixture<RegistroMedellinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMedellinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedellinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
