import { TestBed } from '@angular/core/testing';

import { UikitService } from './uikit.service';

describe('UikitService', () => {
  let service: UikitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UikitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
