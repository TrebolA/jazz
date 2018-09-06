import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBogotaComponent } from './registro-bogota.component';

describe('RegistroBogotaComponent', () => {
  let component: RegistroBogotaComponent;
  let fixture: ComponentFixture<RegistroBogotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroBogotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBogotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
