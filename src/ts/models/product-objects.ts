export class Article {
  photo: string;
  artist: string;
  album: string;
  year: number;
  price: number;
  description: string;
  genre: string;
  purchaseBtn: string;
  infoBtn: string;
  listenBtn: string;

  constructor(
    photo: string,
    artist: string,
    album: string,
    year: number,
    price: number,
    description: string,
    genre: string,
    purchaseBtn: string,
    infoBtn: string,
    listenBtn: string
  ) {
    this.photo = photo;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.price = price;
    this.description = description;
    this.genre = genre;
    this.purchaseBtn = purchaseBtn;
    this.infoBtn = infoBtn;
    this.listenBtn = listenBtn;
  }
}
