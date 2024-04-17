import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public dayNumber: number = 1;

  @Input() titulo: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  nextDay() {
    this.dayNumber =
      Number(this.activatedRoute.snapshot.paramMap.get('id')) + 1;
    if (!Number.isFinite(this.dayNumber)) return;
    this.router.navigateByUrl(`/fitness/day/${this.dayNumber}`);
  }
}
