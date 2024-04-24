import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'fitness',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () =>
      import('./fitness/fitness.module').then((m) => m.FitnessModule),
    // canMatch: [AuthGuard],
  },
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // canMatch: [LoginGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fitness',
  },
  {
    path: '**',
    redirectTo: 'fitness',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
