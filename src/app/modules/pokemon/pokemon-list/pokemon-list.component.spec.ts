import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { PokemonCard } from 'src/app/models/pokemon-card.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { of } from 'rxjs';


const pokemons: PokemonCard[] = [
  {
    "id": "1",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "name": "bulbasaur"
  },
  {
    "id": "2",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "name": "ivysaur"
  },
  {
    "id": "3",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "name": "venusaur"
  },
  {
    "id": "4",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "name": "charmander"
  },
  {
    "id": "5",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "name": "charmeleon"
  },
  {
    "id": "6",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "name": "charizard"
  },
  {
    "id": "7",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "name": "squirtle"
  },
  {
    "id": "8",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "name": "wartortle"
  },
  {
    "id": "9",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "name": "blastoise"
  },
  {
    "id": "10",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "name": "caterpie"
  }
]

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [
        HttpClientTestingModule,
        PipesModule
      ]
    });
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should assign to pokemons the response from 'getPokemons'", () => {
    spyOn(pokemonService, 'getPokemons').and.returnValue(of(pokemons));

    component.getPokemons();

    expect(pokemonService.getPokemons).toHaveBeenCalled();
    expect(component.pokemons).toEqual(pokemons);
  })

  it("should assign to searchTerm the value parameter when call searchPokemon ", () => {
    const value = "value";
    component.searchPokemon(value);

    expect(component.searchTerm).toEqual(value);
    expect(component.page).toEqual(0);
  })

  it("should increase the page number when it is less than the total number of pokemons ", () => {
    component.page = 0;
    component.offset = 5;
    component.pokemons = pokemons;
    component.nextPage();

    expect(component.page).toEqual(5);
  })

  it("should decrees the page number when previousPage is call", () => {
    component.page = 5;
    component.offset = 5;
    component.previousPage();

    expect(component.page).toEqual(0);
  })

  it("should set the page number to 0 when previousPage is call and page number is negative", () => {
    component.page = 0;
    component.offset = 5;
    component.previousPage();

    expect(component.page).toEqual(0);
  })
});
