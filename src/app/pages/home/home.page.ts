import { Component } from '@angular/core';
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Day',
      redirectTo: '/day/1',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Week',
      redirectTo: '/week',
    },
    {
      icon: 'card-outline',
      name: 'Month',
      redirectTo: '/month',
    },
  ];
  constructor() {}
}
