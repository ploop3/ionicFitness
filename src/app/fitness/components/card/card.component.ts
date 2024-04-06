import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../../interfaces/training.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input()
  public exercise!: Exercise;

  onClick() {
    alert('Hi');
  }
}
