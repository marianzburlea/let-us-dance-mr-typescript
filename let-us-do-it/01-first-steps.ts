interface HasAddress {
  name: string;
  address:string;
}

export interface HasElectronicMail {
  email: string;
  name: string;
}

interface HasGreenCar {
  name: string;
  car: string;
}

// intersection types
let personDetails: HasAddress | HasGreenCar = Math.random() > 0.5 ?
  {
    name: 'Marian',
    address: 'London'
  } :
  {
    name: 'Gratiela',
    car: 'Tesla model S'
  }

// personDetails.name

// union types
let someOtherPersonDetails: HasAddress & HasGreenCar = {
  name: 'Maya',
  address: 'London',
  car: 'Mini Tesla'
}
// someOtherPersonDetails.name
// someOtherPersonDetails.address
// someOtherPersonDetails.car

interface Order {
  name: string;
  price: number;
  quantity: number;
}

let newOrder: Order = {
  name: 'Razor blade',
  price: 22,
  quantity: 2
}

let personInfo: { name: string; age?: number};
personInfo = {
  name: 'Marian',
  age: 37
}

personInfo = {
  name: 'Gratiela'
}

let firstName: string = 'Marian'
name = 'Gratiela'
name = 4

let something
something = 44
something = 'nice'

let aa: number[] = []
aa.push(4)
aa.push('four')

let tuple: [number, boolean, boolean, string] = [
  25,
  true,
  false,
  'tuple is a fixed array, with fixed length'
]
