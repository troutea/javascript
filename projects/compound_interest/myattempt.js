
//const prompt = require('prompt-sync')()
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

/**
 * Calculates the total future value of an investment.
 * * @param {number} p - Principal amount
 * @param {number} r - Annual interest rate (e.g., 0.05 for 5%)
 * @param {number} n - Number of times compounded per year
 * @param {number} t - Number of years
 * @returns {string} - The final amount formatted as currency
 */

function compoundInterest(p, r, n, t) {
    const amount = p * Math.pow((1 + (r / n)), (n * t));

    return amount.toFixed(2)

}

const result = compoundInterest(10000, 0.05, 12, 10);

console.log(result)

console.log(`the final value is $${result}`);

function run()
{
    let test = prompt(`enter a test value `)
    console.log(test)
}

run()