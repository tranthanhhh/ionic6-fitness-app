import { TestBed } from '@angular/core/testing';

import { UserInfoDBService } from './userinfodb.service';

describe('UserinfodbService', () => {
  let service: UserInfoDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
