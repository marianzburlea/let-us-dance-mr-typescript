import { HasGreenCar } from "./01-first-steps";

type NumberOrBoolean = number | boolean;
type foodProvisions = { hasFood: boolean };

export interface HasCountry extends HasGreenCar {
  country: string;
}