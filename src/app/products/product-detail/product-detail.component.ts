import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductData } from 'src/app/data/product-data';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productEditForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.productService.updateProduct(this.productService.formData.productId).subscribe(
      res => {
        this.resetForm(form);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.productService.formData = new ProductData();
  }

}
