import { Pipe, PipeTransform } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemon-card.model';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(pokemons: PokemonCard[], page: number = 0, offset: number = 20, search: string = ''): PokemonCard[] {

    if (search.length != 0) {
      return pokemons.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .slice(page, page + offset)
    }

    return pokemons.slice(page, page + offset)
  }

}
