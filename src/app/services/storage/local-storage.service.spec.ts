import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';

const pokemon: PokemonDetail[] = [
  {
    id: "85a81aff-1122-417b-88df-5cee90b1fc1f",
    name: "personalizado",
    height: "12",
    weight: "12",
    types: [
      {
        type: {
          name: "Planta"
        }
      }
    ],
    moves: [
      {
        move: {
          name: "Placaje"
        }
      }
    ],
    sprites: {
      back_default: "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png",
      back_shiny: "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png",
      front_default: "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png",
      front_shiny: "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png"
    }
  }
]

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let localStorageKey = "pokemons";

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return an empty array if there is no pokemons stored", () => {
    spyOn(localStorage, 'getItem').and.returnValue("")

    const result = service.getLocalPokemons();
    expect(result).toEqual([]);
  })

  it("should return an array of pokemons if there is pokemons stored", () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(pokemon))

    const result = service.getLocalPokemons();

    expect(result).toEqual(pokemon);
  })

  it("should save pokemon", () => {
    service.savePokemon(pokemon[0]);

    const result = service.getLocalPokemonById(pokemon[0].id);
    expect(result).toEqual(pokemon[0]);
  })

  it('should map local Pokemons to cards correctly', () => {
    localStorage.removeItem(localStorageKey)
    service.savePokemon(pokemon[0]);

    const mappedPokemons = service.mapLocalPokemonsToCard();

    expect(mappedPokemons[0].id).toEqual(pokemon[0].id);
    expect(mappedPokemons[0].name).toEqual(pokemon[0].name);
    expect(mappedPokemons[0].img).toEqual(pokemon[0].sprites.front_default);
    expect(mappedPokemons[0].fromStorage).toBeTruthy();
  });

});
