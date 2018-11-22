import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../items-api.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {
  public item$: Observable<any>;
  constructor(private route: ActivatedRoute, private itemsApiService: ItemsApiService) {}

  ngOnInit() {
    this.item$ = this.route.params.pipe(switchMap(params => this.itemsApiService.getById(params['itemId'])));
  }
}
