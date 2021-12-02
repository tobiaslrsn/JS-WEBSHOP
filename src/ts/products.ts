import { Article } from "./models/product-objects";
/* 
let image001 = "src/assets/product-feed-img/1.jpg";
let image002 = "src/assets/product-feed-img/2.jpg";
 */
let product001: Article = new Article(
  "1.b18e163d.jpg",
  "Oasis",
  "albumn name",
  1222,
  253,
  "HEJ HEJ HEJ ",
  "rock",
  "purchase",
  "more info"
);
let product002: Article = new Article(
  "2.0fe79b40.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
);
let product003: Article = new Article(
  "3.4e0a3919.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
);
let product004: Article = new Article(
  "4.a09afae4.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
);
let product005: Article = new Article(
  "4.a09afae4.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
);
let product006: Article = new Article(
  "4.a09afae4.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
);
let product007: Article = new Article(
  "4.a09afae4.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
);
let product008: Article = new Article(
  "4.a09afae4.jpg",
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "rock",
  "purchase",
  "more info"
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
};

function productsToPage() {
  let productContaier: HTMLDivElement = document.getElementById(
    "products"
  ) as HTMLDivElement;

  for (let i = 0; i < products.length; i++) {
    // let productContainer = document.getElementsByTagName("main");
    let productOneSection: HTMLDivElement = document.createElement("div");
    productOneSection.className = "product";

    let productImage: HTMLImageElement = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = products[i].photo;
    // productImage.innerHTML = "image: " + products[i].photo;

    let productArtist: HTMLParagraphElement = document.createElement("p");
    productArtist.className = "artist";
    productArtist.innerHTML = "Artist: " + products[i].artist;

    let productAlbum: HTMLParagraphElement = document.createElement("p");
    productAlbum.className = "album";
    productAlbum.innerHTML = "Album: " + products[i].album;

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

    let purchaseBtn = document.createElement("button");
    purchaseBtn.className = "purchase-button";
    purchaseBtn.innerHTML = products[i].purchaseBtn;

    let infoBtn = document.createElement("button");
    infoBtn.className = "info-button";
    infoBtn.innerHTML = products[i].infoBtn;

    productOneSection.appendChild(productImage);
    productOneSection.appendChild(productArtist);
    productOneSection.appendChild(productAlbum);
    productOneSection.appendChild(productYear);
    productOneSection.appendChild(productPrice);
    productOneSection.appendChild(productDesc);
    productOneSection.appendChild(productGenre);
    productOneSection.appendChild(purchaseBtn);
    productOneSection.appendChild(infoBtn);
    productContaier.appendChild(productOneSection);
  }

  console.log(products);
}
