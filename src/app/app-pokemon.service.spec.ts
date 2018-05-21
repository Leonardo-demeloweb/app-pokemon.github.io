import { TestBed, inject } from '@angular/core/testing';

import { AppPokemonService } from './app-pokemon.service';

describe('AppPokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppPokemonService]
    });
  });

  it('should be created', inject([AppPokemonService], (service: AppPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
