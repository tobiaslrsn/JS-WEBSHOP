import { productsToPage } from "./products";
import { Article } from "./models/product-objects";

window.onload = function () {
  /*   let heyhey = localStorage.getItem("product001");
  let hey: string = localStorage.getItem("product002");
 */
  /*   let productArtist: HTMLParagraphElement = document.createElement("p");
  productArtist.className = "artist";
  productArtist.innerHTML = localStorage.getItem("product006"); //this.album

  document.body.appendChild(productArtist);
  console.log(productArtist);
 */
  let getobj: string = localStorage.getItem("product002");
  let obj = JSON.parse(getobj);

  /*  let photo = document.getElementsByClassName("product-image");
  photo.src =
 */

  let photo = document.createElement("img");
  photo.className = "artisten";
  photo.src = obj.photo;
  document.body.appendChild(photo);
  /*
  let artist = document.getElementsByClassName("artist");
  artist = obj.artist.id; */

  console.log(obj);
  console.log(obj.artist + obj.id + obj.album);
};
