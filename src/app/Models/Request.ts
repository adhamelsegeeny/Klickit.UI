import { Product } from "./Product";
import { User } from "./User";

export class Request{
    id!: number;
    product_id!: number;
    product_name="";
    product_price!: number;
    username="";
}