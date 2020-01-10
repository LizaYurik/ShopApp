import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HomePageComponent } from "./modules/home-page/home-page.component";
import { CategoryComponent } from "./modules/category/category.component";
import { PromotionsComponent } from "./modules/promotions/promotions.component";
import { CategoryItemDetailComponent } from "./modules/category-item-detail/category-item-detail.component";

const appRoutes: Routes = [
  {
    path: "promotion",
    component: PromotionsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: RegistrationComponent
  },
  {
    path: "category/:id",
    component: CategoryComponent
  },
  {
    path: "category/:id/detail/:id",
    component: CategoryItemDetailComponent
  },
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "home",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
