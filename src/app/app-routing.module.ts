import { LoadingStrategy } from './services/loading-strategy/loading-strategy';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    data: {
      preload: true
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  providers: [LoadingStrategy],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: LoadingStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
