export class Article {
  artist: string;
  album: string;
  year: number;
  price: number;
  description: string;
  photo: string;
  genre: string;
  purchaseBtn: string;
  infoBtn: any;

  constructor(
    artist: string,
    album: string,
    year: number,
    price: number,
    description: string,
    photo: string,
    genre: string,
    purchaseBtn: string,
    infoBtn: any
  ) {
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.price = price;
    this.description = description;
    this.photo = photo;
    this.genre = genre;
    this.purchaseBtn = purchaseBtn;
    this.infoBtn = infoBtn;
  }
}
