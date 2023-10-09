import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    PipesModule,
    ComponentsModule
  ]
})
export class PokemonModule { }
