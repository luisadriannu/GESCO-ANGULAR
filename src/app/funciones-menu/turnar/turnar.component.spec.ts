import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnarComponent } from './turnar.component';

describe('TurnarComponent', () => {
  let component: TurnarComponent;
  let fixture: ComponentFixture<TurnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
