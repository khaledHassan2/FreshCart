import { TestBed } from '@angular/core/testing';

import { SertranslatenService } from './sertranslaten.service';

describe('SertranslatenService', () => {
  let service: SertranslatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SertranslatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
