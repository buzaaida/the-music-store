import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductData } from '../data/product-data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    readonly baseURL = 'https://localhost:7015/api/Product';
    formData: ProductData = new ProductData();
    list: ProductData[];

    getAllProducts() : Observable<any> {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:7015',
            'Content-Type': 'application/json',
            // 'Authorization': 'bearer ' + this.authService.user.jwt
          }) || null;
        return this.http.get<Observable<ProductData[]>>(`${this.baseURL}/getAllProducts`, {headers});
    }

    getProductById(productId: number) {
        return this.http.get<ProductData>(`${this.baseURL}/${productId}`);    
    }

    createProduct() {
        return this.http.post(`${this.baseURL}/createProduct`, this.formData);
    }

    updateProduct(productId: number) {
        return this.http.put(`${this.baseURL}/${productId}`, this.formData);
    }

    deleteProductById(productId: number) {
        return this.http.delete(`${this.baseURL}/${productId}`);
    }

    refreshList() {
        this.http.get(this.baseURL)
            .toPromise()
            .then(res => this.list = res as ProductData[]);
    }


}