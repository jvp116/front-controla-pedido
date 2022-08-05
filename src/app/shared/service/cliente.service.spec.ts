/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';

describe('Service: Cliente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteService],
    });
  });

  it('should ...', inject([ClienteService], (service: ClienteService) => {
    expect(service).toBeTruthy();
  }));
});
