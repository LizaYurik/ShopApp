import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category/category.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ModulesComponent } from './modules.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ComponentsModule } from '../components/components.module';
 import { CategoryItemDetailComponent } from './category-item-detail/category-item-detail.component'

@NgModule({
  declarations: [
    CategoryComponent, 
    PromotionsComponent, 
    ModulesComponent,
    HomePageComponent,
    CategoryItemDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    ComponentsModule,
  ],
  exports:[
    ModulesComponent,
    CategoryItemDetailComponent
  ]
})
export class ModulesModule { }
