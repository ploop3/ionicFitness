import { Component, OnInit } from '@angular/core';
import { FitnessService } from 'src/app/services/fitness.service';

import { Day } from '../../interfaces/training.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  public day: Day = { workouts: [] };
  public dayNumber: number = 4;

  constructor(
    private fitnessService: FitnessService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(fitnessService.getCacheStore());
  }

  ngOnInit() {
    this.dayNumber = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.dayNumber = 3;
    if (!Number.isFinite(this.dayNumber)) return;
    this.day = this.fitnessService.getDay(this.dayNumber);
  }
}
