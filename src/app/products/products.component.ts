import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductData } from '../data/product-data';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, public service: ProductService, private route: ActivatedRoute,
    private cartService: CartService) { }
  allProducts: ProductData[] = [];

  addToCart(product: ProductData) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

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
  onClickGoToProductEdit() {
    this.router.navigate(['/product-detail']);
  }

  isUserAuthenticated() {
    const token: any = localStorage.getItem("jwt");
    if (token) {
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
