import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ProductData } from '../data/product-data';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private jwtHelper: JwtHelperService, public service: ProductService) { }

  
  allProducts: ProductData[] = [];
  term: string = "";
  

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.allProducts = products
      },
      error: (error) => { console.log(error) }
    })

  }
  

  onClickDetails() {
    this.router.navigate(['product-item/:id']);
  }

  onClickGoToCheckout() {
    this.router.navigate(['/checkout']);
  }

  isUserAuthenticated() {
    const token : any =localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  
  logOut = () => {
    localStorage.removeItem("jwt");
  }
}
