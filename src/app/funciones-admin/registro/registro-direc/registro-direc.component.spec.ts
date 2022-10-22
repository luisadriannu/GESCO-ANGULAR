import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDirecComponent } from './registro-direc.component';

describe('RegistroDirecComponent', () => {
  let component: RegistroDirecComponent;
  let fixture: ComponentFixture<RegistroDirecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDirecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
