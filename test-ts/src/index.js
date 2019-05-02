/* global Promise */
/**
 * Delays the execution by n miliseconds
 * @param n number
 */
const timeout = (n) => new Promise(response => setTimeout(response, n));
/**
 * Adds numbers together
 * @param a number
 * @param b number
 */
export const sumNumber = async (a, b) => {
    await timeout(500);
    return a + b;
};
// run me
(async () => {
    console.log(sumNumber(5, 2));
})();
