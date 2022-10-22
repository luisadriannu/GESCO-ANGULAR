import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubsecretComponent } from './registro-subsecret.component';

describe('RegistroSubsecretComponent', () => {
  let component: RegistroSubsecretComponent;
  let fixture: ComponentFixture<RegistroSubsecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSubsecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSubsecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
