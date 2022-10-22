import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSecretComponent } from './registro-secret.component';

describe('RegistroSecretComponent', () => {
  let component: RegistroSecretComponent;
  let fixture: ComponentFixture<RegistroSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
