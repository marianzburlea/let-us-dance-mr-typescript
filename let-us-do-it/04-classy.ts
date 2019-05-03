import { HasCountry } from "./03-we-are-sweating";

class GigiKent implements HasCountry {
  age: number = 37

  // // the definite assignment operator
  // skin!: string
  skin: string | undefined
  constructor(
    public name: string,
    public country: string = 'UK',
    public car: string
  ) {

  }

  private get skinValue (): string {
    if (!this.skin) {
      this.skin = 'white'
    }

    return this.skin
  }

  async start() {
    this.skin = 'white'
  }
}