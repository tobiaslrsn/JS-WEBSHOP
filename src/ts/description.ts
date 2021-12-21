import { CartList } from "./models/shoppingcart";

let cart = new CartList();

window.onload = function () {
  cart.offcanvasCart();
  descriptionToPage();
};

let getObject: string = localStorage.getItem("product");
let productObject: any = JSON.parse(getObject);

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

  let addToCart: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;
  addToCart.className = "purchase-button";
  addToCart.innerHTML = productObject.addToCart;

  descriptionContainer.appendChild(photo);
  description.appendChild(descriptionUnorderedList);
  descriptionContainer.appendChild(description);
  descriptionUnorderedList.appendChild(artist);
  descriptionUnorderedList.appendChild(album);
  descriptionUnorderedList.appendChild(article);
  descriptionUnorderedList.appendChild(genre);
  descriptionUnorderedList.appendChild(year);

  console.log(productObject);
}
