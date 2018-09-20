import { TestBed } from '@angular/core/testing';

import { HouzlistService } from './houzlist.service';

describe('HouzlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouzlistService = TestBed.get(HouzlistService);
    expect(service).toBeTruthy();
  });
});
