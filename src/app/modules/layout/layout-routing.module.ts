import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonModule)
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/pokemon' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
