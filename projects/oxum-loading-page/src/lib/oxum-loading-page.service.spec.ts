import { TestBed } from '@angular/core/testing';

import { OxumLoadingPageService } from './oxum-loading-page.service';

describe('OxumLoadingPageService', () => {
  let service: OxumLoadingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxumLoadingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
