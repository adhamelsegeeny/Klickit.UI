import { Component } from '@angular/core';
import { Product } from './Models/Product';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
