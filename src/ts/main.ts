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

*/
window.onload = function () {
  // Get the modal
  productModal();

  function productModal() {
    let modal: any = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    let span: any = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    // Get all images and insert the clicked image inside the modal
    // Get the content of the image description and insert it inside the modal image caption
    let images: any = document.getElementsByClassName("product");
    let captionText: any = document.getElementById("caption");
    let i;
    for (i = 0; i < images.length; i++) {
      images[i].onclick = function () {
        modal.style.display = "block";

        captionText.innerHTML = this.innerHTML;
      };
    }
  }
};
