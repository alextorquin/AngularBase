import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemsApiService } from '../../items/items-api.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SubscribeComponent implements OnInit {
  public items: any[];
  constructor(private itemsApiService: ItemsApiService) {}

  ngOnInit() {
    this.itemsApiService.getAll().subscribe(data => (this.items = data));
  }
}
