import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxumLoadingPageComponent } from './oxum-loading-page.component';

describe('OxumLoadingPageComponent', () => {
  let component: OxumLoadingPageComponent;
  let fixture: ComponentFixture<OxumLoadingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxumLoadingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxumLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
