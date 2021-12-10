window.onload = function () {
  cartToPage();
};

let getCart: string = localStorage.getItem("addToCart");
let cartObject: any = JSON.parse(getCart);

function cartToPage() {
  let cartContainer: HTMLDivElement = document.getElementById(
    "shopping-cart"
  ) as HTMLDivElement;

  for (let i = 0; i < cartObject.length; i++) {
    let cartItem: HTMLUListElement = document.createElement(
      "ul"
    ) as HTMLUListElement;
    cartItem.className = "cart-item";

    let photo: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;
    photo.className = "product-image-cart";
    photo.src = cartObject[i].photo;

    let artist: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    artist.className = "artist-cart";
    artist.innerHTML = cartObject[i].artist;

    let album: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    album.className = "album-cart";
    album.innerHTML = "'" + cartObject[i].album + "'";

    let article: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    article.className = "article-cart";
    article.innerHTML = cartObject[i].article;

    let price: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    price.className = "price-cart";
    price.innerHTML = cartObject[i].price + " SEK";

    let removeItem: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    removeItem.className = "remove-from-cart";
    removeItem.innerHTML = "REMOVE";

    cartItem.appendChild(photo);
    cartItem.appendChild(artist);
    cartItem.appendChild(album);
    cartItem.appendChild(article);
    cartItem.appendChild(price);
    cartContainer.appendChild(cartItem);
    cartItem.appendChild(removeItem);
  }
}
