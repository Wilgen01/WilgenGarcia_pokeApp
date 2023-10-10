import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { of, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

const pokemonDetail: PokemonDetail = {
  id: "1",
  name: "Bulbasaur",
  types: [
    { type: { name: "Grass"} },
    { type: { name: "Poison"} },
  ],
  weight: "69",
  height: "7",
  sprites: {
    back_default: "https://...",
    back_shiny: "https://...",
    front_default: "https://...",
    front_shiny: "https://...",
  },
  moves: [
    { move: { name: "Tackle"} },
    { move: { name: "Growl"} },

  ],
};


describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let pokemonService: PokemonService;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ComponentsModule
      ]
    });
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.inject(PokemonService);
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get pokemon by id and assign to 'pokemon' variable", () => {
    spyOn(pokemonService, 'getPokemonById').and.returnValue(of(pokemonDetail))

    component.getPokemon("1")

    expect(pokemonService.getPokemonById).toHaveBeenCalled();
    expect(component.pokemon).toEqual(pokemonDetail);
  })

  it("should navigate to /pokemon when getPokemonById fails ", () => {
    const router = TestBed.inject(Router)

    spyOn(pokemonService, 'getPokemonById').and.returnValue(throwError(""));
    spyOn(router, 'navigateByUrl').and.stub();

    component.getPokemon("1")

    expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/pokemon');
  })

  it("should navigate to /pokemon when local pokemon is undefined", () => {
    const router = TestBed.inject(Router)

    spyOn(localStorageService, "getLocalPokemonById").and.returnValue(undefined)
    spyOn(router, 'navigateByUrl').and.stub();

    component.getLocalPokemon("");
    
    expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/pokemon');
  })

  it("should assign local pokemon to pokemon variable when call getLocalPokemonById ", () => {
    const router = TestBed.inject(Router)

    spyOn(localStorageService, "getLocalPokemonById").and.returnValue(pokemonDetail)

    component.getLocalPokemon("");
    
    expect(component.pokemon).toEqual(pokemonDetail);
  })

});
