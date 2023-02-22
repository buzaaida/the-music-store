import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductData } from '../data/product-data';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../data/user-data';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    readonly baseURL = 'https://localhost:7015/api/User';
    formData: UserData = new UserData();
    list: UserData[];

    getAllUsers(): Observable<any> {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:7015',
            'Content-Type': 'application/json',
            //'Authorization': 'bearer ' + this.authService.user.jwt
        }) || null;
        return this.http.get<Observable<UserData[]>>(`${this.baseURL}/getAllUsers`, { headers });
    }

    getUsertById(userId: number) {
        return this.http.get<UserData>(`${this.baseURL}/${userId}`);
    }

    getUsertByEmail(email: string) {
        return this.http.get<UserData>(`${this.baseURL}/${email}`);
    }

    createUser() {
        return this.http.post(`${this.baseURL}`, this.formData);
    }

    // createUser(user: UserData) {
    //     var options: {};
    //     let headers = new HttpHeaders();
    //     headers = headers.set('content-type', 'application/json; charset=utf-8');
    //     options = {
    //         headers:headers, 
    //     };

    //     const userJson = JSON.stringify(user);
    //     return this.http.post<boolean>('http://localhost:7015/User', userJson, options);

    // }

    updateUser(userId: number) {
        return this.http.put(`${this.baseURL}/${userId}`, this.formData);
    }

    deleteUserById(userId: number) {
        return this.http.delete(`${this.baseURL}/${userId}`);
    }

    refreshList() {
        this.http.get(this.baseURL)
            .toPromise()
            .then(res => this.list = res as UserData[]);
    }


}