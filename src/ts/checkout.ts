window.onload = function () {
  cartToPage();
};

let cart = new cartToPage();

export function cartToPage() {
  let cartContainer: HTMLDivElement = document.getElementById(
    "shopping-cart"
  ) as HTMLDivElement;

  for (let i = 0; i < cart.getCart.length; i++) {
    let cartItem: HTMLUListElement = document.createElement(
      "ul"
    ) as HTMLUListElement;
    cartItem.className = "cart-item";

    let photo: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;
    photo.className = "product-image-cart";
    photo.src = cart.getCart[i].photo;

    let artist: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    artist.className = "artist-cart";
    artist.innerHTML = cart.getCart[i].artist;

    let album: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    album.className = "album-cart";
    album.innerHTML = "'" + cart.getCart[i].album + "'";

    let article: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    article.className = "article-cart";
    article.innerHTML = cart.getCart[i].article;

    let price: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    price.className = "price-cart";
    price.innerHTML = cart.getCart[i].price + " SEK";

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
