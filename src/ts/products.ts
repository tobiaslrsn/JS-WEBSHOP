<<<<<<< HEAD
import { Article } from "./models/product-objects";

/* 
let image001 = "src/assets/product-feed-img/1.jpg";
let image002 = "src/assets/product-feed-img/2.jpg";
 */
let product001: Article = new Article(
  "1.b18e163d.jpg",
=======
import * as productObjects from "./models/product-objects";

/* FRÅGOR:
flera html-filer = ny mapp?
ny scss för ny html fil, kamn man importera t.ex header och footer till den?
hur ska man göra för att något dyker upp i en ny html-fil? local storage? 

Skapa nya html-filer och stylea med samma klassnamn som objekten, så att när man lyckas få objekten 
till en annan html fil så landar dem på plats direkt?

fråga till gruppen:
*/

let image001: string = "1.b18e163d.jpg";
let image002: string = "2.0fe79b40.jpg";
let image003: string = "3.4e0a3919.jpg";
let image004: string = "4.a09afae4.jpg";
let image005: string = "5.ad46c5a6.jpg";
let image006: string = "6.692c53f5.jpg";
let image007: string = "7.318e1685.jpg";
let image008: string = "8.14acd5c6.jpg";

let product001: productObjects.Article = new productObjects.Article(
  image001,
>>>>>>> feature/product-objects
  "Daft Punk",
  "Homework",
  1997,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product002: Article = new Article(
  "2.0fe79b40.jpg",
=======
let product002: productObjects.Article = new productObjects.Article(
  image002,
>>>>>>> feature/product-objects
  "DIO",
  "Holy diver",
  1983,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product003: Article = new Article(
  "3.4e0a3919.jpg",
=======
let product003: productObjects.Article = new productObjects.Article(
  image003,
>>>>>>> feature/product-objects
  "Queen",
  "New of the world",
  1977,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product004: Article = new Article(
  "4.a09afae4.jpg",
=======
let product004: productObjects.Article = new productObjects.Article(
  image004,
>>>>>>> feature/product-objects
  "Calvin Harris",
  "I created disco",
  1222,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product005: Article = new Article(
  "5.ad46c5a6.jpg",
=======
let product005: productObjects.Article = new productObjects.Article(
  image005,
>>>>>>> feature/product-objects
  "Avicii",
  "True",
  2013,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product006: Article = new Article(
  "6.692c53f5.jpg",
=======
let product006: productObjects.Article = new productObjects.Article(
  image006,
>>>>>>> feature/product-objects
  "The Stone Roses",
  "the stone roses",
  1989,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product007: Article = new Article(
  "7.318e1685.jpg",
=======
let product007: productObjects.Article = new productObjects.Article(
  image007,
>>>>>>> feature/product-objects
  "Destroyer",
  "Kaputt",
  2011,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify"
);
<<<<<<< HEAD
let product008: Article = new Article(
  "8.14acd5c6.jpg",
=======
let product008: productObjects.Article = new productObjects.Article(
  image008,
>>>>>>> feature/product-objects
  "Bob Dylan",
  "Infidels",
  1983,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify"
);

let products = [
  product001,
  product002,
  product003,
  product004,
  product005,
  product006,
  product007,
  product008,
];

window.onload = function () {
  productsToPage();
  // cartNumbers();
};

function productsToPage() {
  let productContaier: HTMLDivElement = document.getElementById(
    "products"
  ) as HTMLDivElement;

  for (let i = 0; i < products.length; i++) {
    let productOneSection: HTMLDivElement = document.createElement("div");
    productOneSection.className = "product";

    let productImage: HTMLImageElement = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = products[i].photo;

    let productArtist: HTMLParagraphElement = document.createElement("p");
    productArtist.className = "artist";
    productArtist.innerHTML = products[i].artist;

    let productAlbum: HTMLParagraphElement = document.createElement("p");
    productAlbum.className = "album";
    productAlbum.innerHTML = products[i].album;

    let productYear: HTMLParagraphElement = document.createElement("p");
    productYear.className = "year";
    productYear.innerHTML = "year: " + products[i].year;

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerHTML = "price: " + products[i].price + " SEK";

    let productDesc: HTMLSpanElement = document.createElement("span");
    productDesc.className = "description";
    productDesc.innerHTML = "Description: " + products[i].description;

    let productGenre: HTMLParagraphElement = document.createElement("p");
    productGenre.className = "genre";
    productGenre.innerHTML = "Genre: " + products[i].genre;

    let purchaseBtn: HTMLButtonElement = document.createElement("button");
    purchaseBtn.className = "purchase-button";
    purchaseBtn.innerHTML = products[i].purchaseBtn;

    let infoBtn: HTMLButtonElement = document.createElement("button");
    infoBtn.className = "info-button";
    infoBtn.innerHTML = products[i].infoBtn;

    let listenBtn: HTMLButtonElement = document.createElement("button");
    listenBtn.className = "listen-button";
    listenBtn.innerHTML = products[i].listenBtn;

    productOneSection.appendChild(productImage);
    productOneSection.appendChild(productArtist);
    productOneSection.appendChild(productAlbum);
    productOneSection.appendChild(productYear);
    productOneSection.appendChild(productPrice);
    productOneSection.appendChild(productDesc);
    productOneSection.appendChild(productGenre);
    productOneSection.appendChild(purchaseBtn);
    productOneSection.appendChild(infoBtn);
    productOneSection.appendChild(listenBtn);
    productContaier.appendChild(productOneSection);
    // cartNumbers();
  }
  console.log(products);
}
/* 
let carts = document.getElementsByClassName("add-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}
function cartNumbers() {
  localStorage.setItem("cartNumbers", product007);
}
 */
