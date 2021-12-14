import { Article } from "./product-objects";

export class CartList {
  getCart: Article[];
  constructor() {
    this.getCart = JSON.parse(localStorage.getItem("cart")) || [];
  }
  addToCart(thingToAdd: Article) {
    this.getCart.push(thingToAdd);
    //let getCart: string = localStorage.getItem("addToCart");
    //let cartObject: any = JSON.parse(getCart);
    localStorage.setItem("cart", JSON.stringify(this.getCart));
  }
}
