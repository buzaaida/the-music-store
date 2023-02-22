import { ProductData } from '../data/product-data';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ProductData[] = [];

  addToCart(product: ProductData) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}