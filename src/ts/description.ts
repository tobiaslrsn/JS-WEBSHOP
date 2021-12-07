import { productsToPage } from "./products";
import { Article } from "./models/product-objects";
import create from "core-js/fn/object/create";

window.onload = function () {
  descriptionToPage();
  /*   let heyhey = localStorage.getItem("product001");
  let hey: string = localStorage.getItem("product002");
 */
  /*   let productArtist: HTMLParagraphElement = document.createElement("p");
  productArtist.className = "artist";
  productArtist.innerHTML = localStorage.getItem("product006"); //this.album

  document.body.appendChild(productArtist);
  console.log(productArtist);
 */

  /*  let photo = document.getElementsByClassName("product-image");
  photo.src =
 */
};

let getObject: string = localStorage.getItem("product");
let productObject = JSON.parse(getObject);

function descriptionToPage() {
  let descriptionContainer: HTMLDivElement = document.getElementById(
    "description-container"
  ) as HTMLDivElement;

  let photo = document.createElement("img");
  photo.className = "product-image";
  photo.src = productObject.photo;

  let description = document.createElement("span");
  description.className = "description";
  description.innerHTML = productObject.description;

  let descriptionUnorderedList: HTMLUListElement = document.createElement(
    "ul"
  ) as HTMLUListElement;

  let artist = document.createElement("li");
  artist.className = "artist";
  artist.innerHTML = "ARTIST: " + productObject.artist;
  let album = document.createElement("li");
  album.className = "album";
  album.innerHTML = "ALBUM: " + productObject.album;
  let article = document.createElement("li");
  article.className = "article";
  article.innerHTML = "ART.NR: " + productObject.article;
  let genre = document.createElement("li");
  genre.className = "genre";
  genre.innerHTML = "GENRE: " + productObject.genre;
  let year = document.createElement("li");
  year.className = "year";
  year.innerHTML = "YEAR: " + productObject.year;
  let price = document.createElement("li");
  price.className = "price";
  price.innerHTML = "PRICE: " + productObject.price + " SEK";

  descriptionContainer.appendChild(photo);
  descriptionContainer.appendChild(description);
  description.appendChild(descriptionUnorderedList);
  //UL_>LI
  descriptionUnorderedList.appendChild(artist);
  descriptionUnorderedList.appendChild(album);
  descriptionUnorderedList.appendChild(article);
  descriptionUnorderedList.appendChild(genre);
  descriptionUnorderedList.appendChild(year);
  descriptionUnorderedList.appendChild(price);

  /*
let artist = document.getElementsByClassName("artist");
artist = obj.artist.id; */

  console.log(productObject);
  console.log(productObject.artist + productObject.id + productObject.album);
}
