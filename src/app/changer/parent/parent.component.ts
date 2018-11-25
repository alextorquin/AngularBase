import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit, OnDestroy {
  public counter = 0;
  public item = { name: '', value: 0 };
  private interval;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => this.change(), 2000);
  }

  public onClick() {
    this.change();
  }

  private change() {
    this.counter++;
    this.item.name = 'ex: ' + this.counter.toExponential();
    this.item.value = this.counter;
    console.log('item', this.item);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
