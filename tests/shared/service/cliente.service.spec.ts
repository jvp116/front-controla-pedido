import { inject, TestBed } from '@angular/core/testing';
import { ClienteService } from '../../../src/app/shared/service/cliente.service';

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
