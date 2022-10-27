import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsAnualesComponent } from './docs-anuales.component';

describe('DocsAnualesComponent', () => {
  let component: DocsAnualesComponent;
  let fixture: ComponentFixture<DocsAnualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsAnualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsAnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
