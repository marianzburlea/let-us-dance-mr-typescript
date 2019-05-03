interface GigiValue<M> {
  howMuch: M
}
let n:GigiValue<number[]> = {howMuch: []}
n.howMuch = [2, 2, 3] 

interface FilterSomthing<Z = any> {
  (val: Z): boolean
}