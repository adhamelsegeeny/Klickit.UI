import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { Request } from 'src/app/Models/Request';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  title = 'Products.UI';
  productsList: Product[] = [];
  cartList: Request[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  //buy product using button id
  buyProduct(event: Event) {
    const id = (event.target as Element).id;
    //loop 
    for (let i = 0; i < this.productsList.length; i++) {
      if (this.productsList[i].id == Number(id)) {


        let product = this.productsList[i];
        console.log(product)

        this.productService.buyProduct(product)
          .subscribe({
            next: (res) => {
              alert(res.message);
            },
            error: (err) => {
              alert(err?.error.message);
            }
          });
        break;

      }
    }


    //add product to cart list   
    console.log("Done")
    //refresh the page
    window.location.reload();

  }


  ngOnInit() {
    this.productService.getProducts()
      .subscribe((data: Product[]) => (
        this.productsList = data)
      );

    this.productService.getCart()
      .subscribe((data: Request[]) => (
        this.cartList = data)
      );
  }

  logout() {
    this.router.navigate(["/login"]);
  }

}
