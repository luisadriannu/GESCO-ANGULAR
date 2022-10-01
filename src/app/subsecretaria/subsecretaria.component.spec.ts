import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsecretariaComponent } from './subsecretaria.component';

describe('SubsecretariaComponent', () => {
  let component: SubsecretariaComponent;
  let fixture: ComponentFixture<SubsecretariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsecretariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
