import { TestBed } from '@angular/core/testing';

import { ConversionJsonService } from './conversion-json.service';

describe('ConversionJsonService', () => {
  let service: ConversionJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
