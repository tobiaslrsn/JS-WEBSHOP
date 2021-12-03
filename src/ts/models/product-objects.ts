export class Article {
  photo: string;
  artist: string;
  album: string;
  year: number;
  price: number;
  description: string;
  genre: string;
  purchaseBtn: string;
  infoBtn: any;

  constructor(
    photo: string,
    artist: string,
    album: string,
    year: number,
    price: number,
    description: string,
    genre: string,
    purchaseBtn: string,
    infoBtn: any
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
  }
}
