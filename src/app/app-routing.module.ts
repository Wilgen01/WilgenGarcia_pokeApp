import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withDebugTracing, withInMemoryScrolling } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  },
  { path: '**', redirectTo: '/pokemon' },
  { path: '', pathMatch: 'full', redirectTo: '/pokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withDebugTracing())
  ]
})
export class AppRoutingModule { }
