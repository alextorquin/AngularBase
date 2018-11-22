import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
  public items: any[] = [];
  constructor() {}

  public ngOnInit() {}
  public onSave(newItem) {
    this.items.push(newItem);
  }
}
