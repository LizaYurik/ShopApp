import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { PromotionsListComponent } from './promotions-list/promotions-list.component';
import { PromotionComponent } from './promotions-list/promotion/promotion.component';
import { ComponentsComponent } from './components.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ItemComponent, 
    ContentBoxComponent, 
    PromotionsListComponent, 
    PromotionComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ComponentsComponent,
    ItemComponent
  ]
})
export class ComponentsModule { }
