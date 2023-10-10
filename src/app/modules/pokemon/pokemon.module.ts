import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    PipesModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PokemonModule { }
