import { TestBed } from '@angular/core/testing';

import { PlayerDataService } from './player-data.service';

describe('PlayerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerDataService = TestBed.get(PlayerDataService);
    expect(service).toBeTruthy();
  });
});
