import { TestBed } from '@angular/core/testing';

import { LoadingStrategy } from './loading-strategy';

describe('LoadingStrategy', () => {
  let service: LoadingStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should preload module', () => {
    const route = {
      data: {
        preload: true
      }
    };
    const testFunction = jasmine.createSpy();
    service.preload(route, testFunction);
    expect(testFunction).toHaveBeenCalledTimes(1);
  });

  it('should not preload module with data as null', () => {
    const route = {
      data: null
    };
    const testFunction = jasmine.createSpy();
    service.preload(route, testFunction);
    expect(testFunction).not.toHaveBeenCalled();
  });

  it('should not preload module with route as null', () => {
    const testFunction = jasmine.createSpy();
    service.preload(null, testFunction);
    expect(testFunction).not.toHaveBeenCalled();
  });
});
