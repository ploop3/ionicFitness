import { Component, computed } from '@angular/core';
import { FitnessService } from 'src/app/fitness/services/fitness.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.component.html',
  styles: [],
})
export class DayPageComponent {
  public day: { [key: string]: any } = {};
  public dayNumber: number = 1;

  constructor(
    private fitnessService: FitnessService,
    private activatedRoute: ActivatedRoute
  ) {}

  public finishLoadingStorage = computed<boolean>(() => {
    if (this.fitnessService.cacheStoreOnline() === null) {
      return false;
    }
    this.loadDay();
    return true;
  });

  private loadDay() {
    this.dayNumber = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!Number.isFinite(this.dayNumber)) return;
    this.day = this.fitnessService.cacheStoreOnline()![this.dayNumber];
  }
}
