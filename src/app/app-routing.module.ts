import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './guard/auth-guard';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'header', 
    component: HeaderComponent
  },
  {
    path: 'products', 
    component: ProductsComponent
  },
  {
    path: 'product-item/:name', 
    component: ProductItemComponent
  },
  {
    path: 'product-detail', 
    component: ProductDetailComponent
  },
  {
    path: 'sign-in', 
    component: SignInComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'shopping-cart', 
    component: ShoppingCartComponent
  },
  
  {
    path: 'checkout', 
    component: CheckoutComponent
  },
  {
    path: 'account', 
    component: AccountComponent
  },
  {
    path: 'user', 
    component: UserComponent, canActivate : [AuthGuard]
  },
  {
    path: 'user-detail', 
    component: UserDetailComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
