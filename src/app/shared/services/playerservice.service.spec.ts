import { TestBed } from '@angular/core/testing';

import { PlayerserviceService } from './playerservice.service';

describe('PlayerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerserviceService = TestBed.get(PlayerserviceService);
    expect(service).toBeTruthy();
  });
});
