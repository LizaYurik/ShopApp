import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products : Product[] = [
    new Product(
      "Cleto Chiarli Pignoletto Brut",
      1,
      "./assets/img/productsImg/rosa-chiara-la-scolca-0-750.jpg",
      "345 грн",
      "Игристое вино Cleto Chiarli Pignoletto Brut Villa Cialdini (0,75 л)"
    ),
    new Product(
      "Villa Cialdini Rose Brut Spumante",
      2,
      "./assets/img/productsImg/soave-classico-2018-pieropan-0-750.jpg",
      "340 грн",
      "Игристое вино Villa Cialdini Rose Brut Spumante (0,75 л)"
    ),
    new Product(
      "Fils La Vieille Ferme Rouge",
      3,
      "./assets/img/productsImg/la-vieille-ferme-rouge-perrin-et-fils-0-750.jpg",
      "235 грн",
      "Вино Perrin et Fils La Vieille Ferme Rouge (0,75 л)"
    )
  ];
  getProduct() {
    return this.products;
  }
  constructor() { }
}
