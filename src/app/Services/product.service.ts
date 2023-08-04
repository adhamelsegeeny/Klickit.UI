import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { Request } from '../Models/Request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= "https://localhost:7251/api"
  private url= "Products"

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/${this.url}`);
  }

  public buyProduct(product: Product){

    let request= new Request();
    request.product_id= product.id;
    request.username= JSON.parse(localStorage.getItem('user')!).username;
    console.log(request.username)
    console.log(request.product_id)
    return this.http.post<any>(`${this.baseUrl}/Request`,request);
  }
}
