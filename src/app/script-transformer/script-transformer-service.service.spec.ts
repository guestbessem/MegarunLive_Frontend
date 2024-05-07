import { TestBed } from '@angular/core/testing';

import { ScriptTransformerServiceService } from './script-transformer-service.service';

describe('ScriptTransformerServiceService', () => {
  let service: ScriptTransformerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptTransformerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
