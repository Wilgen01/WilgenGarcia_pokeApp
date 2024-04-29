import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeapiResponse } from 'src/app/models/pokeapi-response.model';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { PokemonCard } from 'src/app/models/pokemon-card.model';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = environment.POKEAPI_URL;
  private pokemons: PokemonCard[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) { }

  public getPokemons() {
    if (this.pokemons.length > 0) {
      return of(this.pokemons)
    }
    return this.http.get<PokeapiResponse>(`${this.url}/pokemon?limit=1292`).pipe(
      map(this.mapToPokemonCard),
      map((pokemon) => {
        pokemon.unshift(...this.localStorageService.mapLocalPokemonsToCard())
        this.pokemons = pokemon;
        return pokemon
      })
    )
  }

  public getPokemonById(id: string) {
    return this.http.get<PokemonDetail>(`${this.url}/pokemon/${id}`)
  }

  public mapToPokemonCard({ results }: PokeapiResponse): PokemonCard[] {
    const pokemonImageUrl = environment.POKEAPI_IMG_URL
    return results.map(({ url, name }) => {
      const pokemonId = url.split('/')[6]
      return {
        id: pokemonId,
        img: `${pokemonImageUrl}/${pokemonId}.png`,
        name
      }
    }) as PokemonCard[]
  }

}
