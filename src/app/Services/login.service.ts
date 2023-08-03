import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { environment } from 'src/environments/environment';
import { User } from "../Models/User";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private baseURL: string = "https://localhost:7251/api/User/";
    constructor(private http: HttpClient) { }

    public userLogin(user: any) {
        return this.http.post<any>(`${this.baseURL}authenticate`,user);
    }
}


