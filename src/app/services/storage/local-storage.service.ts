import { Injectable } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemon-card.model';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly localStorageKey = 'pokemons';

  constructor() { }

  public savePokemon(pokemon: PokemonDetail) {
    const pokemonList: PokemonDetail[] = this.getLocalPokemons() || [];

    pokemonList.push(pokemon);
    localStorage.setItem(this.localStorageKey, JSON.stringify(pokemonList));
    console.log(pokemonList);
  }

  public getLocalPokemons() {
    const pokemons = localStorage.getItem(this.localStorageKey)
    return pokemons ? JSON.parse(pokemons) as PokemonDetail[] : [];
  }

  public mapLocalPokemonsToCard() {
    return this.getLocalPokemons().map(pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default,
        fromStorage: true
      } as PokemonCard
    })
  }

  public getLocalPokemonById(id: string) {
    return this.getLocalPokemons().find(pokemon => pokemon.id == id)
  }
}
