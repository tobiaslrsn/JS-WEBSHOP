import * as productObjects from "./models/product-objects";
import { CartList } from "./models/Isomething";

let image001: string = "/assets/product-feed-img/1.jpg";
let image002: string = "/assets/product-feed-img/2.jpg";
let image003: string = "/assets/product-feed-img/11.jpg";
let image004: string = "/assets/product-feed-img/4.jpg";
let image005: string = "/assets/product-feed-img/5.jpg";
let image006: string = "/assets/product-feed-img/6.jpg";
let image007: string = "/assets/product-feed-img/7.jpg";
let image008: string = "/assets/product-feed-img/8.jpg";
let image009: string = "/assets/product-feed-img/13.jpg";

let product001: productObjects.Article = new productObjects.Article(
  image001,
  "Daft Punk", // ARTIST
  "Homework", //ALBUM
  1997, //YEAR
  250, //PRICE
  "MJT001R", //ARTICLE
  "Homework is the debut studio album by the French electronic music duo Daft Punk, released on 20 January 1997 by Virgin Records and Soma Quality Recordings.<br/><br/> The duo produced the tracks without plans to release an album. After working on projects that were intended to be separate singles over five months, they considered the material good enough for an album.", //DESCRIPTION
  "Electronic", //GENRE
  "purchase", //ADD TO CART
  "more info", //PRODUCT-DESCRIPTION
  "spotify", //SPOTIFY-BUTTON
  1, //ID
  "https://open.spotify.com/album/5uRdvUR7xCnHmUW8n64n9y?si=43c792ad2c8e4c2d" //SPOTIFY-URL
);

let product002: productObjects.Article = new productObjects.Article(
  image002,
  "DIO",
  "Holy diver",
  1983,
  250,
  "MJT002R",
  "Holy Diver is the debut studio album by the American heavy metal band Dio, released in 1983. <br/> Vocalist Ronnie James Dio had just finished his first tenure in Black Sabbath, whose drummer, Vinny Appice, he took with him to put together his own band. <br/><br/>The roster was completed by his former bandmate from Rainbow, Jimmy Bain, on bass and by the young guitarist Vivian Campbell, coming from the new wave of British heavy metal band Sweet Savage. <br/>The album was acclaimed by the music press and is the band's most successful effort.",
  "rock",
  "purchase",
  "more info",
  "spotify",
  2,
  "https://open.spotify.com/album/1QJmLRcuIMMjZ49elafR3K?si=57709f0b1eb141be"
);

let product003: productObjects.Article = new productObjects.Article(
  image003,
  "Deftones",
  "Diamond eyes",
  2010,
  250,
  "MJT003R",
  "Diamond Eyes is the sixth studio album by American alternative metal band Deftones, released on May 4, 2010 by Reprise Records. <br/> It was the first album to feature bassist Sergio Vega, who replaced original bassist Chi Cheng.<br/><br/> An album tentatively titled Eros was originally intended to be the band's sixth full-length release following Saturday Night Wrist (2006), but was not finished due to Cheng entering a coma after a serious car accident that occurred in November 2008, eventually resulting in his death in 2013. <br/><br/>The band continued on with Vega as his replacement, and the release of Eros was put on hold in favor of Diamond Eyes in June 2009.",
  "Rock",
  "purchase",
  "more info",
  "spotify",
  3,
  "https://open.spotify.com/album/4RQnFSkkZlA65Xxchhnaha?si=Td0NsFfJR0-g015ARt4d-g"
);

let product004: productObjects.Article = new productObjects.Article(
  image004,
  "Calvin Harris",
  "I created disco",
  2007,
  250,
  "MJT004R",
  "I Created Disco is the debut studio album by Scottish singer-musician Calvin Harris. <br/>It was released on 15 June 2007 by Columbia Records.<br/><br/> It was preceded by the singles 'Acceptable in the 80s' and 'The Girls', which reached numbers 10 and three on the UK Singles Chart, respectively. <br/><br/>The album debuted at number eight on the UK Albums Chart with first-week sales of 16,121 copies. <br/><br/>On 23 May 2008, it was certified gold by the British Phonographic Industry (BPI). I Created Disco had sold 223,845 copies in the United Kingdom by November 2014.",
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
  "MJT005R",
  "True is the debut studio album by Swedish electronic music producer Avicii, released on 13 September 2013 by PRMD Music and Island Records. <br/><br/>Avicii said that sonically, the album would move away from his earlier house music sound on previous records by incorporating elements of other genres such as country music. <br/><br/>True was preceded by the release of the Aloe Blacc-assisted 'Wake Me Up' that featured a rare Marantz Enhanced Digital Stereo audio track and topped several charts around the world, and 'You Make Me', which features vocals from Swedish artist Salem Al Fakir.",
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
  "The stone roses",
  1989,
  250,
  "MJT006R",
  "The Stone Roses is the debut studio album by English rock band the Stone Roses. <br/><br/>It was recorded mostly at Battery Studios in London with producer John Leckie from June 1988 to February 1989 and released in May of that year by Silvertone Records.<br/><br/>Despite not being an immediate success, the album grew popular alongside the band's high-profile concert performances, which also helped establish them as fixtures of the Madchester and baggy cultural scenes.",
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
  "MJT007R",
  "Kaputt is the ninth album by Canadian band Destroyer. It was released on January 25, 2011 by Merge Records and Dead Oceans Records. The album was leaked towards the end of 2010.<br/><br/> The vinyl edition of the album features bonus material on side three written largely by frequent Destroyer collaborator Ted Bois. <br/><br/>This material is also included in the European CD version of the album credited as 'The Laziest River'. The album was named as a shortlisted (one of 10) nominee for the 2011 Polaris Music Prize award. ",
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
  "MJT008R",
  "Infidels is the 22nd studio album by American singer-songwriter Bob Dylan, released on October 27, 1983 by Columbia Records. <br/><br/>Produced by Mark Knopfler and Dylan himself, Infidels is seen as his return to secular music, following a conversion to Christianity, three evangelical records and a subsequent return to a less religious lifestyle.<br/><br/> Though he has never entirely abandoned religious imagery, Infidels gained much attention for its focus on more personal themes of love and loss, in addition to commentary on the environment and geopolitics. <br/><br/>Christopher Connelly of Rolling Stone called those gospel albums just prior to Infidels 'lifeless', and saw Infidels as making Bob Dylan's career viable again",
  "rock",
  "purchase",
  "more info",
  "spotify",
  8,
  "https://open.spotify.com/album/66zadu7BtUnpbkT4iAkaHy?si=4d6aa4b034384fb2"
);

let product009: productObjects.Article = new productObjects.Article(
  image009,
  "Whitechapel",
  "The valley",
  2019,
  250,
  "MJT009R",
  "The Valley is the seventh studio album by the American deathcore band Whitechapel.<br/><br/> It was released through Metal Blade Records on March 29, 2019 to very positive reviews.<br/><br/> On April 14, 2020, an acoustic version of 'Hickory Creek' was released. It marks the first Whitechapel song to include entirely clean vocals.<br/><br/> Loudwire named it one of the 50 best metal albums of 2019.[9]",
  "Rock",
  "purchase",
  "more info",
  "spotify",
  8,
  "https://open.spotify.com/album/3CuUGJ6cFro2LQIiWlXOue?si=E7MhQu3qSoa0HRHoRZ7eNA"
);

export let products = [
  product001,
  product002,
  product003,
  product004,
  product005,
  product006,
  product007,
  product008,
  product009,
];
