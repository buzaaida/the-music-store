import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  productItem!: {name: string; }; 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productItem = {
      name: this.route.snapshot.params['id']
    }

  }

  onClickGoToCheckout() {
    this.router.navigate(['/checkout']);
  }
  onClickGoToProductEdit() {
    this.router.navigate(['/product-detail']);
  }

}
