// compound interest caclulator that prompts a user for some inputs,
// and finally calculates the compunded interest

let init_amount = 20000
let monthly_contribution = 400
let number_of_years = 30
let interest_rate = 10

function compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate) 
{
  let total = init_amount
  let annual_contribution = monthly_contribution * 12

  for (let i = 0; i < number_of_years; i++) {
    total = total + annual_contribution
    total = total * (100 + interest_rate / 100)
  }

return total.toFixed(2)
}

function calculateRegular(init_amount, monthly_contribution, number_of_years)
{
   let regular_value = init_amount + monthly_contribution * 12 * number_of_years
   return regular_value.toFixed(2)


}

console.log(compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate))
// step 1 - define a function that we can use to calculate the final value
// // of the compounded interest.


//step 2 - define a function that would calculate the difference 


// step3 to create a run function that then prompts the user for all necessary inputs.


//step 4 inside of said function , make a nice pretty print statement using 
// a template literal

