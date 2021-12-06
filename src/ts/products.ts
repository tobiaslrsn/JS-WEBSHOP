import * as productObjects from "./models/product-objects";
import { Article } from "./models/product-objects";

// RAD 238 LOCALSTORAGE FRÅGA

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
  "Daft Punk",
  "Homework",
  1997,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info",
  "spotify",
  1,
  "https://open.spotify.com/album/5uRdvUR7xCnHmUW8n64n9y?si=43c792ad2c8e4c2d"
);
let product002: productObjects.Article = new productObjects.Article(
  image002,
  "DIO",
  "Holy diver",
  1983,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify",
  2,
  "https://open.spotify.com/album/1QJmLRcuIMMjZ49elafR3K?si=57709f0b1eb141be"
);
let product003: productObjects.Article = new productObjects.Article(
  image003,
  "Queen",
  "News of the world",
  1977,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify",
  3,
  "https://open.spotify.com/album/7tB40pGzj6Tg0HePj2jWZt?si=d6a22825fe214a3d"
);
let product004: productObjects.Article = new productObjects.Article(
  image004,
  "Calvin Harris",
  "I created disco",
  1222,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info",
  "spotify",
  4,
  "https://open.spotify.com/album/5gDkjyJBK8VLZjKqqUd79K?si=e13578af3d734b42"
);
let product005: productObjects.Article = new productObjects.Article(
  image005,
  "Avicii",
  "True",
  2013,
  250,
  "DESCRIPTION",
  "Electronic",
  "purchase",
  "more info",
  "spotify",
  5,
  "https://open.spotify.com/album/2H6i2CrWgXE1HookLu8Au0?si=70bf68a557754edb"
);
let product006: productObjects.Article = new productObjects.Article(
  image006,
  "The Stone Roses",
  "the stone roses",
  1989,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify",
  6,
  "https://open.spotify.com/album/0um9FI6BLBldL5POP4D4Cw?si=b8ebc3dc44a04ff3"
);
let product007: productObjects.Article = new productObjects.Article(
  image007,
  "Destroyer",
  "Kaputt",
  2011,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify",
  7,
  "https://open.spotify.com/album/3yy32elu0ZXO6xq2bTuhmU?si=5497dd79effc4e78"
);
let product008: productObjects.Article = new productObjects.Article(
  image008,
  "Bob Dylan",
  "Infidels",
  1983,
  250,
  "DESCRIPTION",
  "rock",
  "purchase",
  "more info",
  "spotify",
  8,
  "https://open.spotify.com/album/66zadu7BtUnpbkT4iAkaHy?si=4d6aa4b034384fb2"
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
//var och en ska skickas till lokal storage vid knapptryck(purchase, info)
//för att sedan kunna hämtas dem andra htmlfilerna och presenteras på skärmen
window.localStorage.setItem("product001", JSON.stringify(product001));
window.localStorage.setItem("product002", JSON.stringify(product002));
window.localStorage.setItem("product003", JSON.stringify(product003));
window.localStorage.setItem("product004", JSON.stringify(product004));
window.localStorage.setItem("product005", JSON.stringify(product005));
window.localStorage.setItem("product006", JSON.stringify(product006));
window.localStorage.setItem("product007", JSON.stringify(product007));
window.localStorage.setItem("product008", JSON.stringify(product008));

window.onload = function () {
  productsToPage();
};

export function productsToPage() {
  let productContainer: HTMLDivElement = document.getElementById(
    "products"
  ) as HTMLDivElement;

  for (let i = 0; i < products.length; i++) {
    let productFeed: HTMLDivElement = document.createElement("div");
    productFeed.className = "product";

    let productImage: HTMLImageElement = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = products[i].photo;

    //ADD DESCRIPTION.HTML ANCHORTAG TO PHOTO
    let photoRedirect: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    photoRedirect.href = "../description.html";

    //CLICK PHOTO TO REDIRECT
    productImage.addEventListener("click", () => {
      window.open(photoRedirect.href); // GÖRA SÅ DEN ÖPPNAS I SAMMA FÖNSTER
    });

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

    //CREATE ADD TO CART BUTTON
    let addToCart: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    addToCart.className = "purchase-button";
    addToCart.innerHTML = products[i].addToCart;

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

    //CLICK TO REDIRECT (VILL INTE HA I NY FLIK)
    infoBtn.addEventListener("click", () => {
      window.open(infoRedirect.href);
      //LOCAL STORAGE
      window.localStorage.setItem("product", JSON.stringify(product002)); //något sånt?
    });

    //CREATE SPOTIFY-BUTTON
    let listenBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    listenBtn.className = "listen-button";
    listenBtn.innerHTML = products[i].listenBtn;

    //CREATE SPOTIFYLOGO
    let spotifyLogo = document.createElement("i");
    spotifyLogo.className = "fa fa-spotify";

    //ADD ALBUM URL TO BUTTON
    let spotifyUrl: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    spotifyUrl.className = "spotify-redirect";
    spotifyUrl.href = products[i].spotifyUrl;

    //CLICK TO OPEN SPOTIFY
    listenBtn.addEventListener("click", () => {
      window.open(spotifyUrl.href);
    });

    productFeed.appendChild(productImage);
    productFeed.appendChild(productArtist);
    productFeed.appendChild(productAlbum);
    productFeed.appendChild(productYear);
    productFeed.appendChild(productPrice);
    productFeed.appendChild(productDesc);
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
