import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  @Input() public item: any;
  constructor() {}

  ngOnInit() {}
}
