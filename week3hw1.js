let ages = [3,39,23,64,2,8,28,93];
let x = ages[0];
let y = ages[ages.length - 1];

console.log(y - x);

ages[ages.length] = 38
console.log(ages);

ages[ages.length] = 4
console.log(ages);


function average(ages) {
    let sum = 0;
    for(var i = 0; i < ages.length;i++){
        sum += ages[i];
    }
    return sum / ages.length;
}

console.log(average(ages));



var names = ['Sam', 'Tommy' , 'Tim', 'Sally', 'Buck', 'Bob'];



function namesTogether(allNames) {
    let sum = allNames[0];
    for(var i = 1; i < allNames.length;i++){
        sum += '  '+ allNames[i] + ' ';
    }
    return sum;
}

console.log(namesTogether(names));




// //Question 3: length - 1
// //Question 4: [0]

// //Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of 
// //each name to the nameLengths array. For example:
// //namesArray = ["Kelly", "Sam", "Kate"] //given this array
// //nameLengths = [5, 3, 4] //create this new array

var namesArray = ["Kelly", "Sam", "Kate"]

function newFunction(namesArray){
    count = []
    for (let i = 0; i < namesArray.length; i++){
        count[i] = namesArray[i].length;
    }
    return count;
}


var nameLengths = newFunction(namesArray);

console.log(nameLengths);



// // Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// // Print the result to the console

function add(nameLengths) {
    let sum = 0;
    for(var i = 0; i < nameLengths.length;i++){
        sum += nameLengths[i];
    }
    return sum
}
    console.log(add(nameLengths));


// // Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
// // itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).



function repeat(word, n) {
  let duplicateWord = word;
  for (let i = 1; i < n; i++) word += duplicateWord; 

  return word;
}
let word = "Belle ";
let n = 3;

console.log(repeat(word, n));



// //Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name 
// //(the full name should be the first and the last name separated by a space).

function createFullName(firstName, lastName){
    console.log(firstName+ ' ' + lastName);

}
createFullName('Belle', 'Gallegos');


// //Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function sum(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i]; 

    return sum > 100; 
} 
 
let arr = [1, 31, 42, 5];
console.log(sum(arr));

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(arr1) { 
    let sum = 0; 
    for (let i = 0; i < arr1.length; i++) 
        sum += arr1[i]; 

    return sum / arr1.length; 
} 
 
let arr1 = [1, 31, 42, 5];
console.log(average(arr1));



function averageOfTwo(array1, array2) {
  let average1 = 0;
  let average2 = 0;

  for (var i = 0; i < array1.length; i++) {
    average1 += array1[i];
  }
  for (var i = 0; i < array2.length; i++) {
    average2 += array2[i];
  }

  return average1 / array1.length > average2 / array2.length;
}

let array1 = [0,20,30,40];
let array2 = [43,20,10,50];

console.log(averageOfTwo(array1, array2));


function willBuyDrink (isHotOutside, moneyInPocket){
      if (isHotOutside == true && moneyInPocket > 10.50)
      result = 'true'
    
      else (result = "false");
      console.log (result)
    }
    willBuyDrink(true, 9);
    willBuyDrink(false, 12);
    willBuyDrink(true, 15);


    

    function createNewFullName(firstName, lastName) {
      console.log('Hello my name is ' + firstName + " " + lastName + ' and my brain is fried!!');
    }
    createNewFullName("Belle", "Gallegos");

    //I copied this function from question 8 because it took me a long time to complete this assignment and my brain wouldn't work anymore
    //what i learned from copying was that i needed to change my function name because is also altered my answer to question 8..... lesson learned. 





    //notes
// function averageOfTwoCorrect(array1, array2){
//     var average1 = average(array1);
//     var average2 = average(array2);
    
//     return average1 > average2;
// }

// let array1 = [0,20,30,40];
// let array2 = [43,20,10,50];





// function twoArrays(array1, array2) { 
//     var averageOfFirstArray;
//     var averageOfSecondArray;

//     for (let i = 0; i < array1.length; i++) 
//         sum += array1[i]; 
//         return sum / array1.length


// return averageOfFirstArray > averageOfSecondArray; 
// } 
 
// let array1 = [1, 31, 42, 5];
// let array2 = [2, 4, 6];

// var isGreater = twoArrays(array1, array2);
// console.log(isGreater);



    

//   private static String duplicateWord(String word, int n) {
//     String duplicatedWord = "";
//     for (int i = 0; i < n; i++) {
//         duplicatedWord += word;
//     }
//     return "duplicatedWord() returns => " + duplicatedWord;















    //         count += namesArray[i].length + lettercount[letterCount.legth];

// function newArray (letterCount){
//     let count = [];
//     count[0] = namesArray[0].length;
//     count[1] = namesArray[1].length;
//     count[2] = namesArray[2].length;

//     [ 5, 3, 4 ]
    
//     for (let i = 0; i < letterCount.length; i++){
//         count += namesArray[i].length + lettercount[letterCount.legth];

//         }
    
//     return count;

   
// }
    //console.log(newArray(namesArray));















    

       





