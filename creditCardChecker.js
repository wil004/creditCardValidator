// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

//manually aded creditcard numbers
// invalids
const masterCard1 = [5,2,2,6,5,8,7,2,6,5,3,2,3,3,5,9];
const visaCard1 = [4,7,1,7,9,9,4,4,4,8,0,5,0,2,7,2,5,6,2]
const randomCard1 = [2,0,3,4,4,5,4,3,9,2,4,1,8,7]

const manualAddedNestedArray = [masterCard1, visaCard1, randomCard1]


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const visaCheck={
   validateCred (array)  {
  let nieuweArray = []
for (let i = array.length - 1; i >= 0; i-- ) {
 let pushh = (array[i])
 nieuweArray.push(pushh)
}
let nieuweArray2 = []
for (let i = 1; i < nieuweArray.length; i++) { nieuweArray2.push(nieuweArray[i])
}
let finalArray = []
for (let i = 0; i < nieuweArray2.length; i++)
{
  let double = nieuweArray2[i]
if (i %2 === 0) {double = (double * 2)}
if (double > 9) {double = double - 9}
finalArray.push(double)
}
 const somOfArray = finalArray.reduce((accumulator, currentValue) => {  
 return accumulator + currentValue
  });
  const creditCardSom = somOfArray + nieuweArray[0]
  if (creditCardSom %10 == 0) {
    return true
  } else { return false}
},
  findInvalidCards (nestedArray)  {
  let invalidCards = []
  let nested = nestedArray.filter(word => this.validateCred(word) === false);
  invalidCards.push(nested)
  return invalidCards
  }, 
  }

let invalidCreds = [valid1, invalid2, invalid3, invalid4, invalid5]

const idInvalidCardCompanies = (invalidArray) => {
   let getInvalids = visaCheck.findInvalidCards(invalidArray)
   getInvalids = getInvalids[0]
   let firstNumbersArray = [];
   for (let i = 0; i < getInvalids.length; i++) {
     let firstNumbers = getInvalids[i][0]
  firstNumbersArray.push(firstNumbers)
   }
  let amex = firstNumbersArray.findIndex(number => number === 3)
  let visa = firstNumbersArray.findIndex(number => number === 4)
  let mastercard = firstNumbersArray.findIndex(number => number === 5)
  let discover = firstNumbersArray.findIndex(number => number === 6)
  let noCompany = firstNumbersArray.findIndex(number => number < 3 || number > 6)
  let creditCompany = []
  if (firstNumbersArray[amex]) {
    creditCompany.push('Amex')
  }
  if (firstNumbersArray[visa]) {
    creditCompany.push('Visa')
   }
  if (firstNumbersArray[mastercard]) {
    creditCompany.push('Mastercard') }
  if (firstNumbersArray[discover]) {
    creditCompany.push('Discover') }
  if (firstNumbersArray[noCompany])
    {creditCompany.push('Company not found')}
  return creditCompany
}

console.log('The function below checks if one card is valid or invalid!')
console.log(visaCheck.validateCred(valid1))

console.log('The numbers below are the false creditcards of the nestedarrays!')
console.log(visaCheck.findInvalidCards(batch))

console.log('The array below shows which companies have invalid cards in a nested array!')
console.log(idInvalidCardCompanies(manualAddedNestedArray))
