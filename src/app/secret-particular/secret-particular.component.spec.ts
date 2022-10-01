import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretParticularComponent } from './secret-particular.component';

describe('SecretParticularComponent', () => {
  let component: SecretParticularComponent;
  let fixture: ComponentFixture<SecretParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretParticularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
