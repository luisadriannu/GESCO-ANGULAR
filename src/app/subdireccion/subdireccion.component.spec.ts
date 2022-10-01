import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdireccionComponent } from './subdireccion.component';

describe('SubdireccionComponent', () => {
  let component: SubdireccionComponent;
  let fixture: ComponentFixture<SubdireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdireccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
