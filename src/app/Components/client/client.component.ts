import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  title = 'Products.UI';
  productsList : Product[]=[];

  constructor(private productService: ProductService){}

  //buy product using button id
  buyProduct(event: Event){
    const id= (event.target as Element).id;
    let product= this.productsList[Number(id)-1];
    this.productService.buyProduct(product)
    .subscribe({
      next: (res)=>{
        alert(res.message);
      },
      error: (err)=>{
        alert(err?.error.message);
      }
    });

    console.log("Done")
    
  }


  ngOnInit(){
    this.productService.getProducts()
    .subscribe((data: Product[])=>(
      this.productsList = data)
    );
  }

}
