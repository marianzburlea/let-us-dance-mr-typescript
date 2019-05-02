/* global Promise */
/**
 * Delays the execution by n miliseconds
 * @param n number
 */
const timeout = (n: number) => new Promise(response => setTimeout(response, n))

/**
 * Adds numbers together
 * @param a number
 * @param b number
 */
export const sumNumber = async (a: number, b: number) => {
  await timeout(500)
  return a + b
}

// run me
(async () => {
  console.log(sumNumber(5, 2))
})()