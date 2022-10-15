import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocsComponent } from './ver-docs.component';

describe('VerDocsComponent', () => {
  let component: VerDocsComponent;
  let fixture: ComponentFixture<VerDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
