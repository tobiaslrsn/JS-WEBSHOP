import { Article } from "./product-objects";

export class CartList {
  cartListList: Article[];
  constructor() {
    this.cartListList = JSON.parse(localStorage.getItem("cart")) || [];
  }
  addToCart(thingToAdd: Article) {
    this.cartListList.push(thingToAdd);
    //let getCart: string = localStorage.getItem("addToCart");
    //let cartObject: any = JSON.parse(getCart);
    localStorage.setItem("cart", JSON.stringify(this.cartListList));
  }
}
