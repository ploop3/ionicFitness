import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input()
  public exercise: { [key: string]: any } = {};

  onClick() {
    alert('Hi');
  }
}
