// Question#1 Start
// var currency = prompt("Enter Currency USD or PKR;", "USD").toLocaleLowerCase();
// var amount = +prompt("Enter Amonut Into Number;", 10);

// function CurrencyChecker(currency,amount){

//     const pkrToUsd = 0.0036;
//     const usdToPkr = 277.80;
//     if(currency === "pkr"){
//         alert("Your currency is PKR after convert into USD your amount is " + amount * pkrToUsd);
//     }else if(currency === "usd"){
//         alert("Your currency is USD after convert into PKR your amount is " + amount * usdToPkr);
//     }else{
//         alert("Please Enter Correct Currency");
//     }

// }
// CurrencyChecker(currency,amount);

// Question#1 complete


// Question#2 start

// var stdArray = ["Syed", "Salik", "Ali", "Ashar", "Ahmed", "Owais", "Ahmed", "Malik", "Jhangir"];
// console.log(stdArray);//original array

// Add a new student to the end of the list. using push()
// var pushMethod = stdArray.push("Abdullah");
// console.log(stdArray);//check abdullah add or not
// console.log(pushMethod);//check return value

// Remove the last student from the list. using pop()
// var popMethod = stdArray.pop();
// console.log(stdArray);//check remove or not from last
// console.log(popMethod);//check returm value

// add new student to the beginning using unshift()
// var unshiftMethod = stdArray.unshift("Rehan");
// console.log(stdArray);//check add or not from begining
// console.log(unshiftMethod);//check returm value

// Remove the first student from the list using shift()
// var shiftMethod = stdArray.shift();
// console.log(stdArray);//check remove or not from begining
// console.log(shiftMethod);//check returm value

// Add multiple students to the end of the list. using push()
// var pushMethod = stdArray.push("Rehman", "Darim", "Uzair");
// console.log(stdArray);//check abdullah add or not
// console.log(pushMethod);//check return value

// Remove a specific student from the list by their index. using splice()
// var spliceMethod = stdArray.splice(2 , 1);
// console.log(stdArray);//check remove 2 index std or not
// console.log(spliceMethod);//check return value

// Remove a specific number of students from the list, starting from a specified index. using splice()
// var spliceMethod2 = stdArray.splice(1 , 6);
// console.log(stdArray);//check remove 1 index to 6 index std or not
// console.log(spliceMethod2);//check return value

// console.log(stdArray);//original array
// Question#2 complete


// Question#3 start
// var userInput = prompt("Insert Sentence", "hellow world");
// var breakUserInput = userInput.split(" ");
// for(var i = 0; i < breakUserInput.length; i++){
//     var capitalizeUserInput = breakUserInput[i].charAt(0).toLocaleUpperCase() + breakUserInput[i].slice(1);
//     console.log(capitalizeUserInput);
//     breakUserInput[i] = capitalizeUserInput;
// }
// console.log(breakUserInput.join(" "));
// Question#3 complete


// Question#4 start
// var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
// // a) convert 'lazy' into 'active' n print new string sentence in console.
// var foxToActive = sentence.replace("lazy" , "active");//using replace
// console.log(foxToActive);
// // b) from the above sentence only extract the word fox, and store it into new variable and print in console.
// // var extractWordFox = sentence.slice(16, 20);//using slice
// // var extractWordFox = sentence.split(" ")[3];//using split
// console.log(extractWordFox);



// Question#4 complete

