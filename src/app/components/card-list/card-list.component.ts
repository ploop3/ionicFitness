import { Component, OnInit, Input } from '@angular/core';

import { Exercise, Workout } from '../../interfaces/training.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!this.workout) throw new Error('Workout property is required.');
  }
  @Input()
  public workoutIndex: number = 0;
  @Input()
  public workout!: Workout;
}
