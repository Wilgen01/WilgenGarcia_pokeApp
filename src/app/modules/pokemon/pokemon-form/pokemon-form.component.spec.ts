import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/storage/local-storage.service';

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [PokemonFormComponent]
    });
    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should mark the form as touches when the form is invalid", () => {

    spyOn(component.pokemonForm, "markAllAsTouched").and.stub();

    component.onSubmit()

    expect(component.pokemonForm.markAllAsTouched).toHaveBeenCalled();
  })

  it("should call savePokemon when form is valid", () => {
    const localStorageService = TestBed.inject(LocalStorageService)

    component.pokemonForm.setValue({
      "id": "",
      "name": "Personalizado",
      "weight": 12,
      "height": 12,
      "types": {
        "name": "Planta"
      },
      "moves": {
        "name": "Placaje"
      },
      "sprites": {
        "back_default": "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png",
        "back_shiny": "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png",
        "front_default": "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png",
        "front_shiny": "https://img.pokemondb.net/sprites/sun-moon/normal/sandshrew.png"
      }
    })

    spyOn(localStorageService, "savePokemon").and.stub()

    component.onSubmit();

    expect(localStorageService.savePokemon).toHaveBeenCalled();
  })
});
