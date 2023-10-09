import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeapiResponse } from 'src/app/models/pokeapi-response.model';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { PokemonCard } from 'src/app/models/pokemon-card.model';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = environment.POKEAPI_URL;
  private pokemonImageUrl = environment.POKEAPI_IMG_URL;

  constructor(private readonly http: HttpClient) { }

  public getPokemons() {
    return this.http.get<PokeapiResponse>(`${this.url}/pokemon?limit=1292`).pipe(
      map(({ results }) => {
        return results.map(pokemon => {
          const pokemonId = pokemon.url.split('/')[6]
          return {
            id: pokemonId,
            img: `${this.pokemonImageUrl}/${pokemonId}.png`,
            name: pokemon.name
          }
        })
      })
    )
  }

  public getPokemonById(id: string) {
    return this.http.get<PokemonDetail>(`${this.url}/pokemon/${id}`)
  }

}
