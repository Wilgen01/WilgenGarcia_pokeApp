import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon!: PokemonDetail;
  public pokemonId!: string;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) { }


  public ngOnInit(): void {
    this.getParams()
  }

  public getParams() {
    this.activatedRoute.params.subscribe(
      param => {
        if (param) {
          this.pokemonId = param['id'];
          this.getPokemon(this.pokemonId);
        }
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

}
