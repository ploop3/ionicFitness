import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { DayPageComponent } from './pages/day/day.page.component';
import { WeekPage } from './pages/week/week.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'day/:id', component: DayPageComponent },
      { path: 'calendar', component: CalendarPageComponent },
      { path: 'week', component: WeekPage },
      { path: '**', redirectTo: 'week' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessRoutingModule {}
