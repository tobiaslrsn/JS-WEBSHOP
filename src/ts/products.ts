import * as productObjects from "./models/product-objects";
import { CartList } from "./models/Isomething";
import { products } from "./header";

window.onload = function () {
  productsToPage();
  // cartProductCount();
  cart.offcanvasCart();
};

let cart = new CartList();

document.getElementById("cartCount").innerHTML = "" + cart.getCart.length;
console.log(cart.getCart.length);

export function productsToPage() {
  let productContainer: HTMLDivElement = document.getElementById(
    "products"
  ) as HTMLDivElement;

  for (let i = 0; i < products.length; i++) {
    let productFeed: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    productFeed.className = "product";

    let productImage: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;
    productImage.className = "product-image";
    productImage.src = products[i].photo;

    //ADD DESCRIPTION.HTML ANCHORTAG TO PHOTO
    let photoRedirect: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    photoRedirect.href = "../description.html";

    //CLICK PHOTO TO REDIRECT
    productImage.addEventListener("click", () => {
      window.localStorage.setItem("product", JSON.stringify(products[i]));
      location.href = photoRedirect.href;
    });

    let productArtist: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    productArtist.className = "artist";
    productArtist.innerHTML = products[i].artist;

    let productAlbum: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    productAlbum.className = "album";
    productAlbum.innerHTML = products[i].album;

    let productYear: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    productYear.className = "year";
    productYear.innerHTML = "year: " + products[i].year;

    let productPrice: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    productPrice.className = "price";
    productPrice.innerHTML = "price: " + products[i].price + " SEK";

    let productGenre: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    productGenre.className = "genre";
    productGenre.innerHTML = "Genre: " + products[i].genre;

    //PURCHASE BUTTON
    let addToCart: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    addToCart.className = "purchase-button";
    addToCart.innerHTML = products[i].addToCart;

    addToCart.addEventListener("click", () => {
      cart.addToCart(products[i]);
      cart.offcanvasCart();

      document.getElementById("cartCount").innerHTML = "" + cart.getCart.length;
      console.log(cart.getCart.length);
    });

    //CREATE INFOBUTTON (PRODUCTDESCRIPTION)
    let infoBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    infoBtn.className = "info-button";
    infoBtn.innerHTML = products[i].infoBtn;

    //ADD DESCRIPTION.HTML ANCHORTAG
    let infoRedirect: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    infoRedirect.href = "../description.html";

    //CLICK TO REDIRECT
    infoBtn.addEventListener("click", () => {
      window.localStorage.setItem("product", JSON.stringify(products[i]));
      location.href = infoRedirect.href;
    });

    //CREATE SPOTIFY-BUTTON
    let listenBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    listenBtn.className = "listen-button";
    listenBtn.innerHTML = products[i].listenBtn;

    //CREATE SPOTIFYLOGO
    let spotifyLogo: HTMLElement = document.createElement("i") as HTMLElement;
    spotifyLogo.className = "fa fa-spotify";

    //ADD ALBUM URL TO BUTTON
    let spotifyUrl: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    spotifyUrl.className = "spotify-redirect";
    spotifyUrl.href = products[i].spotifyUrl;

    //CLICK TO OPEN SPOTIFY
    listenBtn.addEventListener("click", () => {
      location.href = spotifyUrl.href;
    });

    productFeed.appendChild(productImage);
    productFeed.appendChild(productArtist);
    productFeed.appendChild(productAlbum);
    productFeed.appendChild(productYear);
    productFeed.appendChild(productPrice);
    productFeed.appendChild(productGenre);
    productFeed.appendChild(addToCart);
    productFeed.appendChild(infoBtn);

    infoBtn.appendChild(infoRedirect);
    productFeed.appendChild(listenBtn);
    listenBtn.appendChild(spotifyUrl);
    listenBtn.appendChild(spotifyLogo);
    productContainer.appendChild(productFeed);
  }
  console.log(products);
}
