import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { DayPageComponent } from './pages/day/day.page.component';
import { HomePage } from './pages/home/home.page';
import { MonthPage } from './pages/month/month.page';
import { WeekPage } from './pages/week/week.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DayPageComponent,
    HomePage,
    MonthPage,
    WeekPage,
    LayoutPageComponent,
    CalendarPageComponent,
    CardComponent,
    CardListComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FitnessRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule,
  ],
})
export class FitnessModule {}
