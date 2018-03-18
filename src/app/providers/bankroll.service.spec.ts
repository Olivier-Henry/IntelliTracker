import { TestBed, inject } from '@angular/core/testing';

import { BankrollService } from './bankroll.service';

describe('BankrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankrollService]
    });
  });

  it('should be created', inject([BankrollService], (service: BankrollService) => {
    expect(service).toBeTruthy();
  }));
});
