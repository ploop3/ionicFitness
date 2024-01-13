import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardListComponent],
  imports: [CommonModule, IonicModule, SharedModule],
  exports: [HeaderComponent, CardComponent, CardListComponent],
})
export class ComponentsModule {}
