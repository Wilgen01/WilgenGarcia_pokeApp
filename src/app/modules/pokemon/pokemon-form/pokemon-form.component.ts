import { Component } from '@angular/core';
import { GenericItem, PokemonDetail } from 'src/app/models/pokemon-detail.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent {
  pokemonDetail: PokemonDetail = {
    id: '',
    name: '',
    types: [],
    weight: '',
    height: '',
    sprites: {
      back_default: '',
      back_shiny: '',
      front_default: '',
      front_shiny: ''
    },
    moves: []
  };

  typesList: GenericItem[] = [{name:"uno", url:""},{name:"dos", url:""},{name:"tres", url:""}]; // Rellena esta lista con los tipos disponibles
  movesList: GenericItem[] = [{name:"uno", url:""},{name:"dos", url:""},{name:"tres", url:""}]; // Rellena esta lista con los movimientos disponibles

  onSubmit() {
    // Aquí puedes manejar la lógica para guardar el PokemonDetail en tu backend o hacer lo que necesites
    console.log(this.pokemonDetail);
  }

  onSelectType(input: HTMLOptionElement){
    console.log(input);
    input.selected = true
  }
}
