import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/modules/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(
        'Cleto Chiarli Pignoletto Brut',
        1,
        './assets/img/productsImg/pignoletto-brut-villa-cialdini-cleto-chiarli-0-750.jpg',
        '345 грн',
        'Игристое вино Cleto Chiarli Pignoletto Brut Villa Cialdini (0,75 л)',
      ),
      new Product(
        'Villa Cialdini Rose Brut Spumante',
        2,
        './assets/img/productsImg/rose-brut-spumante-villa-cialdini-0-75-l.jpg',
        '340 грн',
        'Игристое вино Villa Cialdini Rose Brut Spumante (0,75 л)',
      ),
      new Product(
        'Fils La Vieille Ferme Rouge',
        3,
        './assets/img/productsImg/la-vieille-ferme-rouge-perrin-et-fils-0-750.jpg',
        '235 грн',
        'Вино Perrin et Fils La Vieille Ferme Rouge (0,75 л)',
      )
    ]
  }
}
