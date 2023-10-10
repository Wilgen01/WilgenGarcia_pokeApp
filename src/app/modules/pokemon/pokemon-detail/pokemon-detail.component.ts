import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../services/storage/local-storage.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon!: PokemonDetail;
  public pokemonIsFromLocal: boolean = false;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) { }


  public ngOnInit(): void {
    this.getQueryParams();
  }

  public getQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      ({ fromStorage }) => {
        this.pokemonIsFromLocal = fromStorage ? true : false
        this.getParams()
      }
    )
  }

  public getParams() {
    this.activatedRoute.params.subscribe(
      ({ id }) => {
        if (!id) this.router.navigateByUrl('/pokemons');
        this.pokemonIsFromLocal
          ? this.getLocalPokemon(id)
          : this.getPokemon(id)

      }
    )
  }

  public getPokemon(id: string) {
    this.pokemonService.getPokemonById(id).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
      },
      error: () => {
        this.router.navigateByUrl('/pokemons');
      }
    })
  }

  public getLocalPokemon(id: string) {
    const localPokemon = this.localStorageService.getLocalPokemonById(id)
    if (localPokemon) {
      console.log(localPokemon);
      
      this.pokemon = localPokemon;
      return;
    }
    this.router.navigateByUrl('/pokemons');
  }

}
