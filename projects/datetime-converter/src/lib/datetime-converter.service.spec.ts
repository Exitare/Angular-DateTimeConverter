import { TestBed, inject } from '@angular/core/testing';

import { DateTimeConverter } from './datetime-converter.service';

describe('DatetimeConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateTimeConverter]
    });
  });

  it('should be created', inject([DateTimeConverter], (service: DateTimeConverter) => {
    expect(service).toBeTruthy();
  }));
});
