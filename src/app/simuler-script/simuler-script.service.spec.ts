import { TestBed } from '@angular/core/testing';

import { SimulerScriptService } from './simuler-script.service';

describe('SimulerScriptService', () => {
  let service: SimulerScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulerScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
