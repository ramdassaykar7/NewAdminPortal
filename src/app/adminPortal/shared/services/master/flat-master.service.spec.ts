import { TestBed, inject } from '@angular/core/testing';

import { FlatMasterService } from './flat-master.service';

describe('FlatMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatMasterService]
    });
  });

  it('should be created', inject([FlatMasterService], (service: FlatMasterService) => {
    expect(service).toBeTruthy();
  }));
});
