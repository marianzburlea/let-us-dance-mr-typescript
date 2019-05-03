import { HasCountry } from "./03-we-are-sweating";
import { HasGreenCar } from "./01-first-steps";

abstract class ExtendMeAbstract implements HasGreenCar, HasCountry {
  abstract carIsTeleported: boolean
  constructor(
    public name: string,
    public car: string,
    public country: string
  ) {}

  abstract teleportCar():void
}

class NonAbstract extends ExtendMeAbstract {
  public carIsTeleported: boolean = false
  constructor(
    public name: string,
    public car: string,
    public country: string
  ) {
    super(name, car, country)
  }

  teleportCar() {}
}

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