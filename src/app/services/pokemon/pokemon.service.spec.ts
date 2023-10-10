import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { PokeapiResponse } from 'src/app/models/pokeapi-response.model';
import { PokemonCard } from 'src/app/models/pokemon-card.model';

const data: PokeapiResponse = {
  "count": 1292,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }
  ]
}

const expectData: PokemonCard[] = [
  {
    id: '1',
    name: 'bulbasaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }
]

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should map pokeapi response to PokemonCard interface", () => {
    const result = service.mapToPokemonCard(data);

    expect(result).toEqual(expectData);
  })
});
