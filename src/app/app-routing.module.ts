import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"signin",component:SigninComponent},
  {path:"food",component:FoodComponent},
  {path:"fooddetails/:_id",component:FoodDetailsComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"footer",component:FooterComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"cart",component:CartComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
