import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'day',
    loadChildren: () =>
      import('./pages/day/day.module').then((m) => m.DayPageModule),
  },
  {
    path: 'week',
    loadChildren: () =>
      import('./pages/week/week.module').then((m) => m.WeekPageModule),
  },
  {
    path: 'month',
    loadChildren: () =>
      import('./pages/month/month.module').then((m) => m.MonthPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
