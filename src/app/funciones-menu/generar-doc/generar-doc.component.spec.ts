import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarDocComponent } from './generar-doc.component';

describe('GenerarDocComponent', () => {
  let component: GenerarDocComponent;
  let fixture: ComponentFixture<GenerarDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
