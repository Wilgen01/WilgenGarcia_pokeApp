import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';



@NgModule({
  declarations: [
    PokemonCardComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    PokemonCardComponent,
    SkeletonComponent
  ]
})
export class ComponentsModule { }
