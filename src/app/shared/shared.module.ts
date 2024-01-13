import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyVideoComponent } from './components/lazy-video/lazy-video.component';

@NgModule({
  declarations: [LazyVideoComponent],
  imports: [CommonModule],
  exports: [LazyVideoComponent],
})
export class SharedModule {}
