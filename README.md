# creditCardValidator
This is a codecademy project you had to finish independently I finished it a while ago but want to save it in a remote repository.

**Codecademy created a project where students had to make a creditcard validator using luhns algorithm in javascript.**
I finished the project and here is my step by step solution.

1. I created an object called visaCheck.

2. In luhns algorithm if the last number is odd you have to double each number that is even, if the last number is even you have to double each number that is odd.
  I needed a way to do that and I noticed that if I reversed creditcard numbers , all numbers to double must be odd because the last number will then always be 0.
  So I decided to create a method called validateCred within the visaCheck object and created an empty array called nieuweArray.
  I turned the creditcardnumbers backwards in a for loop and pushed them in nieuweArray.
  
3. Next I needed a way to double all odd numbers! But since I did not know how to do that and I knew how to double even numbers I decided to make the odd numbers even numbers. I created another empty array called nieuweArray2 and with a for loop I started with index [1] instead of 0.
I pushed the outcome in nieuweArray2, now I had an array without the last number of the creditcard were all numbers that have to be doubled were even.

4. Now that all numbers I had to double where even I knew exactly what to do! I created a new array where I could push my doubled numbers and normal numbers in called finalArray. I created another for loop and in the for loop I created a variable called double which is an itteration over nieuweArray2. With an if statement I made sure to only pick out the even numbers. IF the index number of the array is modulo 2 in other words even, then the double variable (nieuweArray2[even]) will be given a new value double * 2.
-- There is another rule in luhns algorithm which is that if the doubled number is higher then 9, you need to substract 9 from the doubled number! --
With this in mind I also made sure that IF the doubled numbers were bigger then 9 then the new value of double would be double minus 9.
After the if statements checked the conditions I pushed the double variable in the finalArray array.
**Now I have an array that doubled all the numbers that needed to be doubled.**

5. In luhn's algorithm after doubling the necessary numbers, all numbers of the creditcard need to be summed up together.
I did that using the reduce method.
I created a variable called somOfArray where I used the reduce method on the finalArray array.
I gave the reduce method 2 parameters: the accumulator and the currentValue.
This sums all the numbers in finalArray up.
I also didn't forgot that to give the numbers that I needed to double even index numbers, I left the last number of the creditcard out of this sum.
The last number of the creditcard is still in the beginning of the nieuweArray array.
So I created a new variable called creditCardSom where I summed up the somOfArray and the nieuweArray[0].
Now I had all the necessary numbers summed up.

6. Now the last rule of the luhns algorithm is that all that are summed up have to be modulo 10.
So in an if statement I made sure if the creditCardSom had the needed requirements.
If creditCardSom %0 == 0 then it returns true which means the creditcard number is valid.
Else it returns false which means the creditcard is invalid.
Now we have a working method called validateCred in the visaCheck object.

7. I was not done there yet! I had to make another method where you could check up an entire array for invalid cards.
The requirement of this method is that if you had an array of a lot of creditcards it would only return the invalid ones to the console.
I did this by creating a method in the visaCheck object called findInvalidCards with a parameter of nestedArray.

8. Within this nestedArray method I created an empty array called invalidCards to push the invalid cards in.

9. After that I created a variable called nested where I filtered all invalid cards out using the iterator method .filter.
This method iterates like a for loop over every index of an array to check if it has the given requirements.
As arguement of the filter method I used the validateCred method to make sure if the card was valid.
The filter method makes sure it does this over all indexes of the array.
Then I pushed them in the invalidCards array.
I returned invalidCards afterwards and the method now does what it has to do!

10. The last thing I had to do was to check which bankingcompanies have invalid creditcardnumbers. The company can only be shown one time in the console.
Which bankingcompany a creditcard belongs to depends on the number the card starts with.
If it starts with a 3 it is amex, if it starts with a 4 visa, if it starts with a 5 mastercard ,if it starts with a 6 discover and if it starts with another number it should print 'Company not found' in the console.
So I created a function called idInvalidCardCompanies with a parameter of invalidArray to do this.

11. First I made a variable called getInvalids with a value of the visacheck object with the findInvalidCards method, the findInvalidCards method has invalidArray as a arguement. So the array typed in the idInvalidCardCompanies function will be used in the findInvalidCards method!

12. Let's say you use the array invalidCreds as an arguement of the function idInvalidCardCompanies. Remember that the invalidCreds array has arrays (creditcardnumbers) in it and that the findInvalidCards(invalidArray) method creates an array of this array with creditcardsnumbers (arrays) in it which are invalid.
Therefor if you want to iterate through visaCheck.findInvalidCards(invalidArray) which is defined in the function as getInvalids you only have 1 array (with an array in it and other arrays (creditcardnumbers) in that array) to itterate over.
To make sure to itterate over the array inside the getInvalids array you give the let variable 'getInvalids' a new value which is the inside of it's own array.
To set the new value of getInvalids to the array inside of the current getInvalids array you need it's indexnumber. Since there is only one array in the current getInvalids variable the indexnumber is 0.
So to define the new value you set getInvalids to getInvalids[0].
Now you have the array within the array which holds all the false creditcardnumbers arrays.

13. Now that we have the right array to itterate, it's time to check which banks have false creditcardnumbers.
I created an empty array called firstNumbersArray.
I used a for loop that iterates over the false creditcardnumbers array which is as mentioned getInvalids.
As told earlier to check which creditcardnumbers belong to which bank you check the first number.
Since the creditcardnumbers are arrays the first indexnumber is the first creditcardnumber.
So I created a variable called firstNumbers, in this variable the getInvalids itterates over it's arrays and takes the first number of every array.
It does this by getInvalids[itterateOverArrays][takeFirstNumberOfTheseArrays] also known in the code as getInvalids[i][0].
It pushes all the first numbers in the firstNumbersArray.

14. Now the firstNumbersArray is an array with all the first numbers of invalid creditcards you need to check to know which bank they belong to.
I made variables with all of the banks names and set it's value to find the first indexnumber of the firstNumbersArray that is equal to the first number of the bank his creditcard.
If an indexnumber has been found it means there is a false creditcard detected of that bank.

15. In the final step I created an empty array called creditCompany. With if statements I check if any indexnumbers have been found.
I didn't use else if because there might be multiple banks with invalid creditcardnumbers.
I pushed the name of the banks with invalid card numbers in the creditCompany array and made the function return this array.

After that I printed some examples to the console.

**As a beginning developer I am very proud and happy that it works!
For anyone reading this thank you! If you have advice on how I could've done this project better please don't hesitate to connect me.
Thank you!**
