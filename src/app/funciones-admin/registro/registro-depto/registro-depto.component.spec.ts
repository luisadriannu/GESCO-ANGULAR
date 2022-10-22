import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeptoComponent } from './registro-depto.component';

describe('RegistroDeptoComponent', () => {
  let component: RegistroDeptoComponent;
  let fixture: ComponentFixture<RegistroDeptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDeptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
