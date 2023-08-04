import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Request } from 'src/app/Models/Request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  productsList : Product[]=[];
  requestList : Request[]=[];

  constructor(private productService: ProductService, private router:Router){}

  ngOnInit(){
    this.productService.getProducts()
    .subscribe((data: Product[])=>(
      this.productsList = data)
    );

    this.productService.getRequests()
    .subscribe((data: Request[])=>(
      this.requestList = data)
    );
  }

  addProduct(){
    let name=(<HTMLInputElement>document.getElementById("pName")).value;
    let price= (<HTMLInputElement>document.getElementById("pPrice")).value;
    let product= new Product();
    product.name=name;
    product.price=Number(price);
    this.productService.addProduct(product)
    .subscribe({
      next: (res)=>{
        alert(res.message);
      },
      error: (err)=>{
        alert(err?.error.message);
      }
    });

    window.location.reload();

  }

  logout(){
    this.router.navigate(["/login"]);
  }

}
