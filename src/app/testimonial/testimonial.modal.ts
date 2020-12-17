export class Testimonial {
  public name: string;
  public occupation: string;
  public imagePath: string;
  public description: string;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    description: string
  ) {
    this.name = name;
    this.occupation = desc;
    this.imagePath = imagePath;
    this.description = description;
  }
}
