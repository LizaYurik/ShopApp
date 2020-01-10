import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/modules/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() products: Product;
  constructor() { }
  
  ngOnInit() {
  }

}
