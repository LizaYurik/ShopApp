import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './header/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './header/nav/nav.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent, 
    BreadcrumbsComponent, 
    FooterComponent, 
    SidebarComponent , 
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
