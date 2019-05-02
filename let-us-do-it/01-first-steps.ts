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
