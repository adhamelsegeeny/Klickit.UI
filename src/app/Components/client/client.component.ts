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

  ngOnInit(){
    this.productService.getProducts()
    .subscribe((data: Product[])=>(
      this.productsList = data)
    );
  }

}
