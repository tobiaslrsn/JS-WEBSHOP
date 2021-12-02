let pimage = "https://scontent.farn2-1.fna.fbcdn.net/v/t1.15752-9/262186386_1378403952618584_3248604606257487723_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=trerNDGs5coAX8bDpJU&_nc_ht=scontent.farn2-1.fna&oh=5532dc35fe97c2a841686a8b907e07d2&oe=61CC6064";
class Article {
    constructor(artist, album, year, price, description, photo, genre){
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.price = price;
        this.description = description;
        this.photo = photo;
        this.genre = genre;
    }
}
let product001 = new Article("Oasis", "albumn name", 1222, 253, "sag", pimage, "rock");
let product002 = new Article("Oasis", "album name", 1222, 253, "sag", pimage, "rock");
let products = [
    product001,
    product001
];
console.log(products);
window.onload = function() {
    // Get the modal
    productModal();
    function productModal() {
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
};

//# sourceMappingURL=index.a7a236c3.js.map
