import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DataGeneratorService } from './data-generator.service';

describe('DataGeneratorService', () => {
  let service: DataGeneratorService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGeneratorService);
    tick(2000);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.getAllData().length).toEqual(service.getDataSize());
  });

  it('should not filter data', () => {
    expect(service.filterData("").length).toEqual(service.getDataSize());
  });

  it('should filter data', () => {
    expect(service.filterData("1").length).toBeLessThan(service.getDataSize());
  });

  it('should get data range', () => {
    expect(service.getDataRange(0,50).length).toEqual(50);
  });
});
