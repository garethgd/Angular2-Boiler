export class Whiskey {
    whiskeyName: string = 'Jameson';
    price: number = 22;
    origin: string = "Florida";
    distillery : string = "Jacksonville";
    desc : string = "An Oak that grew on the bank of a river was uprooted by a severe gale of wind, and thrown across the stream.";
    imgsrc : string = "images/clontarf-whiskey.jpg";


constructor(whiskeyName: string, price: number, origin : string, distillery : string, description : string, imgsrc : string)
{
    this.whiskeyName = whiskeyName;
    this.price = price;
    this.origin = origin;
    this.distillery = distillery;
    this.desc = description;
    this.imgsrc = imgsrc;
}

}

