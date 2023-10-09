import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';
import { PokemonCard } from 'src/app/models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: PokemonCard[] = [];
  public page: number = 0;
  public offset: number = 20;
  public searchTerm: string = '';

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons() {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }

  public searchPokemon(value: string) {
    this.searchTerm = value
    this.page = 0;
  }

  public previousPage() {
    this.page -= this.offset

    if (this.page < 0) {
      this.page = 0;
    }
  }

  public nextPage() {
    if (this.page < this.pokemons.length) {
      this.page += this.offset
    }
  }
}
