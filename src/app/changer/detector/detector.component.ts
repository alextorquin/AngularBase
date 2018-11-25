import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-detector',
  templateUrl: './detector.component.html',
  styleUrls: ['./detector.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetectorComponent implements OnInit, OnDestroy {
  public counter = 0;
  public item = { name: '', value: 0 };
  private interval;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => this.change(), 5000);
  }

  public onClick() {
    this.change();
  }

  private change() {
    this.counter++;
    this.item.name = 'ex: ' + this.counter.toExponential();
    this.item.value = this.counter;
    console.log('change', this.item);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
