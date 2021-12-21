export class Article {
  photo: string;
  artist: string;
  album: string;
  year: number;
  price: number;
  article: string;

  description: string;
  genre: string;
  addToCart: string;
  infoBtn: string;
  listenBtn: string;
  id: number;
  spotifyUrl: string;

  constructor(
    photo: string,
    artist: string,
    album: string,
    year: number,
    price: number,
    article: string,
    description: string,
    genre: string,
    addToCart: string,
    infoBtn: string,
    listenBtn: string,
    id: number,
    spotifyUrl: string
  ) {
    this.photo = photo;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.price = price;
    this.article = article;
    this.description = description;
    this.genre = genre;
    this.addToCart = addToCart;
    this.infoBtn = infoBtn;
    this.listenBtn = listenBtn;
    this.id = id;
    this.spotifyUrl = spotifyUrl;
  }
}
