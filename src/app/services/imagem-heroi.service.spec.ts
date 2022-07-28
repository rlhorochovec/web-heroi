import { TestBed } from '@angular/core/testing';

import { ImagemHeroiService } from './imagem-heroi.service';

describe('ImagemHeroiService', () => {
  let service: ImagemHeroiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagemHeroiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
