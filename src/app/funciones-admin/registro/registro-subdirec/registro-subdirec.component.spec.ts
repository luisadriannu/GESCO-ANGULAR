import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubdirecComponent } from './registro-subdirec.component';

describe('RegistroSubdirecComponent', () => {
  let component: RegistroSubdirecComponent;
  let fixture: ComponentFixture<RegistroSubdirecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSubdirecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSubdirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
