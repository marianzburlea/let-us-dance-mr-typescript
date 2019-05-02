"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.sumNumber = async (a, b) => {
    await timeout(500);
    return a + b;
};
// run me
(async () => {
    console.log(await exports.sumNumber(5, 2));
})();
