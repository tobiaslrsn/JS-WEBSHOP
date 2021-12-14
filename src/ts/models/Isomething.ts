import { Article } from "./product-objects";

export class CartList {
  getCart: Article[];
  constructor() {
    this.getCart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerHTML = "" + this.getCart.length;
    console.log(this.getCart.length);
  }


  addToCart(thingToAdd: Article) {
    this.getCart.push(thingToAdd);

    localStorage.setItem("cart", JSON.stringify(this.getCart));
    console.log("function 1");
  }

  offcanvasCart() {
    console.log(this.getCart);

    let cartContainer: HTMLDivElement = document.getElementById(
      "shopping-cart-offcanvas"
    ) as HTMLDivElement;
    cartContainer.innerHTML = "";

    for (let i = 0; i < this.getCart.length; i++) {
      let cartItem: HTMLUListElement = document.createElement(
        "ul"
      ) as HTMLUListElement;
      cartItem.className = "cart-item-offcanvas";

      let photo: HTMLImageElement = document.createElement(
        "img"
      ) as HTMLImageElement;
      photo.className = "product-image-offcanvas";
      photo.src = this.getCart[i].photo;

      let artist: HTMLLIElement = document.createElement("li") as HTMLLIElement;
      artist.className = "artist-offcanvas";
      artist.innerHTML = this.getCart[i].artist;

      let album: HTMLLIElement = document.createElement("li") as HTMLLIElement;
      album.className = "album-offcanvas";
      album.innerHTML = "'" + this.getCart[i].album + "'";

      let article: HTMLLIElement = document.createElement(
        "li"
      ) as HTMLLIElement;
      article.className = "article-offcanvas";
      article.innerHTML = this.getCart[i].article;

      let price: HTMLLIElement = document.createElement("li") as HTMLLIElement;
      price.className = "price-offcanvas";
      price.innerHTML = this.getCart[i].price + " SEK";

      let removeItem: HTMLButtonElement = document.createElement(
        "button"
      ) as HTMLButtonElement;
      removeItem.className = "remove-from-offcanvas";
      removeItem.innerHTML = "REMOVE";
      removeItem.addEventListener("click", () => {

        this.getCart.splice(i, 1);
        
        this.offcanvasCart();
        
        localStorage.setItem("cart", JSON.stringify(this.getCart));
        
        });

      cartItem.appendChild(photo);
      cartItem.appendChild(artist);
      cartItem.appendChild(album);
      cartItem.appendChild(article);
      cartItem.appendChild(price);
      cartContainer.appendChild(cartItem);
      cartItem.appendChild(removeItem);

      console.log("funktion5");
    }
  }
}
