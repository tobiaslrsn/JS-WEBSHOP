import { Article } from "./models/product-objects";

/* FRÅGOR:
flera html-filer = ny mapp?
ny scss för ny html fil, kamn man importera t.ex header och footer till den?
hur ska man göra för att något dyker upp i en ny html-fil? local storage? 
*/

let image001: string = "1.b18e163d.jpg";
let image002: string = "2.0fe79b40.jpg";
let image003: string = "3.4e0a3919.jpg";
let image004: string = "4.a09afae4.jpg";
let image005: string = "5.ad46c5a6.jpg";
let image006: string = "6.692c53f5.jpg";
let image007: string = "7.318e1685.jpg";
let image008: string = "8.14acd5c6.jpg";

let product001: Article = new Article(
  image001,
  "Daft Punk",
  "Homework",
  1997,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info"
);
let product002: Article = new Article(
  image002,
  "DIO",
  "Holy diver",
  1983,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info"
);
let product003: Article = new Article(
  image003,
  "Queen",
  "New of the world",
  1977,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info"
);
let product004: Article = new Article(
  image004,
  "Calvin Harris",
  "I created disco",
  1222,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info"
);
let product005: Article = new Article(
  image005,
  "Avicii",
  "True",
  2013,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info"
);
let product006: Article = new Article(
  image006,
  "The Stone Roses",
  "the stone roses",
  1989,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info"
);
let product007: Article = new Article(
  image007,
  "Destroyer",
  "Kaputt",
  2011,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info"
);
let product008: Article = new Article(
  image008,
  "Bob Dylan",
  "Infidels",
  1983,
  250,
  "DESCRIPTION",
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
