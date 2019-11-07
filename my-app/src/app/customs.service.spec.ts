import { TestBed } from '@angular/core/testing';

import { CustomsService } from './customs.service';

describe('CustomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomsService = TestBed.get(CustomsService);
    expect(service).toBeTruthy();
  });
});
