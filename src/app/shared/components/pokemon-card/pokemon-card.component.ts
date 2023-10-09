import { Component, Input } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonCard;
}
