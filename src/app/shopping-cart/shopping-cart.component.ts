import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onClickGoToCheckout() {
    this.router.navigate(['/checkout']);
  }

}
