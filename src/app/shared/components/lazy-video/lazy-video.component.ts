import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-video',
  templateUrl: './lazy-video.component.html',
  styleUrls: ['./lazy-video.component.scss'],
})
export class LazyVideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!this.videoUrl) throw new Error('Video URL is required');
  }

  @Input()
  public videoUrl!: string;

  public hasLoaded: boolean = false;

  onLoad() {
    this.hasLoaded = true;
  }
}
