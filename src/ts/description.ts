import { CartList } from "./models/Isomething";

window.onload = function () {
  descriptionToPage();
};

let getObject: string = localStorage.getItem("product");
let productObject: any = JSON.parse(getObject);

let cart = new CartList();

function descriptionToPage() {
  let descriptionContainer: HTMLDivElement = document.getElementById(
    "description-container"
  ) as HTMLDivElement;

  let photo: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;
  photo.className = "product-image-description";
  photo.src = productObject.photo;

  let description: HTMLSpanElement = document.createElement(
    "span"
  ) as HTMLSpanElement;
  description.className = "description-description";
  description.innerHTML = productObject.description;

  let descriptionUnorderedList: HTMLUListElement = document.createElement(
    "ul"
  ) as HTMLUListElement;

  let artist: HTMLLIElement = document.createElement("li") as HTMLLIElement;
  artist.className = "artist-description";
  artist.innerHTML = "ARTIST: " + productObject.artist;

  let album: HTMLLIElement = document.createElement("li") as HTMLLIElement;
  album.className = "album-description";
  album.innerHTML = "ALBUM: " + productObject.album;

  let article: HTMLLIElement = document.createElement("li") as HTMLLIElement;
  article.className = "article-description";
  article.innerHTML = "ART.NR: " + productObject.article;

  let genre: HTMLLIElement = document.createElement("li") as HTMLLIElement;
  genre.className = "genre-description";
  genre.innerHTML = "GENRE: " + productObject.genre;

  let year: HTMLLIElement = document.createElement("li") as HTMLLIElement;
  year.className = "year-description";
  year.innerHTML = "YEAR: " + productObject.year;

  let price: HTMLLIElement = document.createElement("li") as HTMLLIElement;
  price.className = "price-description";
  price.innerHTML = "PRICE: " + productObject.price + " SEK";

  let addToCart: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;
  addToCart.className = "purchase-button";
  addToCart.innerHTML = productObject.addToCart;

  descriptionContainer.appendChild(photo);
  descriptionContainer.appendChild(description);
  description.appendChild(descriptionUnorderedList);
  descriptionUnorderedList.appendChild(artist);
  descriptionUnorderedList.appendChild(album);
  descriptionUnorderedList.appendChild(article);
  descriptionUnorderedList.appendChild(genre);
  descriptionUnorderedList.appendChild(year);
  descriptionUnorderedList.appendChild(price);

  console.log(productObject);
}
