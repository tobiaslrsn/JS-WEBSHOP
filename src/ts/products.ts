import { Article } from "./models/product-objects";

// let image001 = image;

let product001: Article = new Article(
  "Oasis",
  "albumn name",
  1222,
  253,
  "HEJ HEJ HEJ ",
  "photo",
  "rock",
  "purchase",
  "more info"
);
let product002: Article = new Article(
  "blur",
  "album name",
  1222,
  253,
  "LOREMLOREMLOREM LOREMLOREMLOREM",
  "photo",
  "rock",
  "purchase",
  "more info"
);

let products = [product001, product002];

for (let i = 0; i < products.length; i++) {
  let productArtist: HTMLSpanElement = document.createElement("h1");
  productArtist.className = "artist";
  productArtist.innerHTML = "Artist: " + products[i].artist;

  let productAlbum: HTMLSpanElement = document.createElement("p");
  productAlbum.className = "album";
  productAlbum.innerHTML = "Album: " + products[i].album;

  let productYear: HTMLSpanElement = document.createElement("p");
  productYear.className = "year";
  productYear.innerHTML = "year: " + products[i].year;

  let productPrice: HTMLSpanElement = document.createElement("p");
  productPrice.className = "price";
  productPrice.innerHTML = "price: " + products[i].price + " SEK";

  let productDesc: HTMLSpanElement = document.createElement("p");
  productDesc.className = "description";
  productDesc.innerHTML = "Description: " + products[i].description;

  let productGenre: HTMLSpanElement = document.createElement("p");
  productGenre.className = "genre";
  productGenre.innerHTML = "Genre: " + products[i].genre;

  let productImage = document.createElement("img");
  productImage.className = "product-image";
  productImage.src = "../assets/product-feed-img/10.jpg";
  productImage.innerHTML = "image: " + products[i].photo;

  let purchaseBtn = document.createElement("button");
  purchaseBtn.className = "purchase-button";
  purchaseBtn.innerHTML = products[i].purchaseBtn;

  let infoBtn = document.createElement("button");
  infoBtn.className = "info-button";
  infoBtn.innerHTML = products[i].infoBtn;

  document.body.appendChild(productImage);
  document.body.appendChild(productArtist);
  document.body.appendChild(productAlbum);
  document.body.appendChild(productYear);
  document.body.appendChild(productPrice);
  document.body.appendChild(productDesc);
  document.body.appendChild(productGenre);
  document.body.appendChild(productImage);
  document.body.appendChild(purchaseBtn);
  document.body.appendChild(infoBtn);
}

console.log(products);
