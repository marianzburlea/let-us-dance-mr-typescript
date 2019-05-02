var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export const sumNumber = (a, b) => __awaiter(this, void 0, void 0, function* () {
    yield timeout(500);
    return a + b;
});
// run me
(() => __awaiter(this, void 0, void 0, function* () {
    console.log(sumNumber(5, 2));
}))();
