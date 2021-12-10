import { Article } from "./product-objects";

export class CartList {
  cartListList: Article[];
  constructor() {
    this.cartListList = JSON.parse(localStorage.getItem("product")) || [];
  }
  addToCart() {
    let getCart: string = localStorage.getItem("addToCart");
    let cartObject: any = JSON.parse(getCart);
  }
}
