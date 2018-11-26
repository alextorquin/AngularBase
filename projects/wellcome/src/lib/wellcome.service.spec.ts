import { TestBed } from '@angular/core/testing';

import { WellcomeService } from './wellcome.service';

describe('WellcomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WellcomeService = TestBed.get(WellcomeService);
    expect(service).toBeTruthy();
  });
});
