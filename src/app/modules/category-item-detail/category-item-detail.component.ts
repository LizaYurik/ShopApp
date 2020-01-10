import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-item-detail',
  templateUrl: './category-item-detail.component.html',
  styleUrls: ['./category-item-detail.component.scss']
})
export class CategoryItemDetailComponent implements OnInit {

  products: {
    id: number;
    name: string;
  }

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.products = {
        id: params['id'],
        name: params['name']
      }
    })
  }
}
