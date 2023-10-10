import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericItem, PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  public pokemonForm!: FormGroup;
  public typesList: GenericItem[] = [{ name: "Planta" }, { name: "Fuego" }, { name: "Agua" }]; 
  public movesList: GenericItem[] = [{ name: "Placaje" }, { name: "Arañazo" }, { name: "Picotazo" }]; 

  constructor(
    private readonly fb: FormBuilder,
    private readonly localStorageService: LocalStorageService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.pokemonForm = this.fb.group({
      id: ['',],
      name: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      types: this.fb.group({
        name: ['', Validators.required]
      }),
      moves: this.fb.group({
        name: ['', Validators.required]
      }),
      sprites: this.fb.group({
        back_default: ['', Validators.required],
        back_shiny: ['', Validators.required],
        front_default: ['', Validators.required],
        front_shiny: ['', Validators.required]
      })
    })
  }

  

  public onSubmit() {
    if (this.pokemonForm.invalid) {
      return this.pokemonForm.markAllAsTouched();
    }

    const formValue = this.pokemonForm.value;
    const pokemon : PokemonDetail = {
      id: crypto.randomUUID(),
      name: formValue.name,
      height: formValue.height,
      weight: formValue.weight,
      types: [{type: formValue.types}],
      moves:  [{move: formValue.moves}],
      sprites: formValue.sprites
    }
  
    this.localStorageService.savePokemon(pokemon);
  }

}
