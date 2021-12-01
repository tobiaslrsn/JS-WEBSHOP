/* class Article {
  artist: string;
  album: string;
  year: number;
  price: number;
  description: string;
  purchased: boolean;
  constructor(
    artist: string,
    album: string,
    year: number,
    price: number,
    description: string,
    purchased: boolean
  ) {
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.price = price;
    this.description = description;
    this.purchased = purchased;
  }
}
let todos: Article[
]; 

*/ window.onload = function() {
};
function productModal() {
    // Get the modal
    let modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    // Get all images and insert the clicked image inside the modal
    // Get the content of the image description and insert it inside the modal image caption
    let images = document.getElementsByClassName("product");
    let captionText = document.getElementById("caption");
    let i;
    for(i = 0; i < images.length; i++)images[i].onclick = function() {
        modal.style.display = "block";
        captionText.innerHTML = this.innerHTML;
    };
}

//# sourceMappingURL=index.a7a236c3.js.map
