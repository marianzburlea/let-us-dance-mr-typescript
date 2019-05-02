import { HasGreenCar, HasAddress } from "./01-first-steps";

interface MobileNumber {
  [prop:string]: undefined | {
    number: number,
    code: number
  }
}

const samsung: MobileNumber = {}
if (typeof samsung.num === 'string') {
  samsung.num = {
    number: 123,
    code: 2
  }
}

type NumberOrBoolean = number | boolean;
type foodProvisions = { hasFood: boolean };

export interface HasCountry extends HasGreenCar {
  country: string;
}

interface ContactSomeone {
  (message: HasGreenCar | HasAddress, note: string): void;
}

type ContactSomeoneType = (
  message: HasGreenCar | HasAddress,
  note: string
) => void