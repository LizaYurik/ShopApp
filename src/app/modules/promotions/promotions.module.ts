import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsListComponent } from './promotions-list/promotions-list.component';
import { PromotionsComponent } from './promotions.component';



@NgModule({
  declarations: [PromotionsListComponent, PromotionsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PromotionsListComponent,
    PromotionsComponent
  ]
})
export class PromotionsModule { }
