export class Item {
  id: string;
  location: string;
  price: number;
  currencySymbol: string;
  imgUrl: string;
  thumbUrl: string;
  bathroomNumber: number;
  bedroomNumber: number;
  summary: string;

  constructor(source: any) {
    this.id = this.getId(source.img_url);
    this.price = source.price;
    this.currencySymbol = source.price_currency;
    this.imgUrl = source.img_url;
    this.thumbUrl = source.thumb_url;
    this.bathroomNumber = source.bathroom_number;
    this.bedroomNumber = source.bedroom_number;
    this.summary = source.summary;

    // truncated to the first two title components
    this.location = source.title.split(', ').slice(0, 2).join(', ');
  }

  getId(url: string): string {
    return url.match(/\d{10,}/)[0];
  }


}
