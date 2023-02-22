import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { HeaderComponent } from './header/header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { config } from 'rxjs';
import { AuthGuard } from './guard/auth-guard';
import { UserComponent } from './user/user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    RegisterComponent,
    SignInComponent,
    CheckoutComponent,
    ProductItemComponent,
    HeaderComponent,
    ShoppingCartComponent,
    AccountComponent,
    UserComponent,
    ProductDetailComponent,
    UserDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7015"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],

  exports: [
    FormsModule
  ]
})
export class AppModule { }
