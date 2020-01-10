import { Component, OnInit } from "@angular/core";

import { Product } from "src/app/shared/modules/product.model";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductService } from "../../shared/modules/services/product.service"

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  pageId: string;

  constructor( private _router: Router, private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    this.products = this._productService.getProduct();
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.pageId = params["id"];
    });

  }

  loadDetails(plant: Product) {
    this._router.navigate(["category", this.pageId, "detail", plant.id]);
  }
}
