// Question#1 Start
// Topic: If-Else Statements
// var userAge = +prompt("Enter your age", 20);

// if (userAge <= 12) {
//     alert("your Age Is " + userAge);
//     alert("Ticket Price is: $8");
// }else if(userAge >= 13 && userAge <= 59){
//     alert("your Age Is " + userAge);
//     alert("Ticket Price is: $12");
// }else{
//     alert("your Age Is " + userAge);
//     alert("Ticket Price is: $10");
// }
// Question#1 complete


// Question#2 start
// Topic: Switch Case
// var userCoffe = prompt("Select Any One Listed Item;", "Espresso, Cappuccino, Latte, Mocha:");

// switch (userCoffe) {
//     case "Espresso":
//         alert("You Select " + userCoffe);
//         alert("Your Price is $3");
//         break;
//     case "Cappuccino":
//         alert("You Select " + userCoffe);
//         alert("Your Price is $4");
//         break;
//     case "Latte":
//         alert("You Select " + userCoffe);
//         alert("Your Price is $5");
//         break;
//     case "Mocha":
//         alert("You Select " + userCoffe);
//         alert("Your Price is $6");
//         break;

//     default:
//         alert("Invalid choice. " + userCoffe + " Please Select One Item From Listed Items");
//         break;
// }
// Question#2 complete


// Question#3 start
// Calculate the Sum of N Numbers
// var userNumber = +prompt("Enter a positive integer N:", 3);
// var sum = 0;
// for (var i = 1; i <= userNumber; i++) {
//     sum = sum + i;
// }
// alert("The sum of the first " + userNumber + " numbers is: " + sum);
// Question#3 complete


// Question#4 start
// var stdGrade = prompt("Enter You Grade:", "A, B, C").toLocaleUpperCase();
// var checkActivity = prompt("Do you participated in extracurricular activities:", "No").toLowerCase();

// if(stdGrade === "A"){
//     if(checkActivity === "yes"){
//         alert("Your grade is: " + stdGrade + " participated in extracurricular activities: " + checkActivity + " you win full scolarship");
//     }else{
//         alert("Your grade is: " + stdGrade + " participated in extracurricular activities: " + checkActivity + " you win half scolarship");
//     }

// }else if(stdGrade === "B"){
//     if(checkActivity === "yes"){
//         alert("Your grade is: " + stdGrade + " participated in extracurricular activities: " + checkActivity + " you win half scolarship");
//     }else{
//         alert("Your grade is: " + stdGrade + " participated in extracurricular activities: " + checkActivity + " you win quarter scolarship");
//     }

// }else{
//     alert("If your grade is C or below: " + stdGrade + " no scholarship is awarded regardless of extracurricular participation:");
// }
// Question#4 complete



// Question#5 start
// var tableNumber = +prompt("Enter a number to print its table", 2);
// var tableLength = +prompt("Enter a length of table", 10);

// for (var i = 1; i <= tableLength; i++){
//     console.log(tableNumber + " x " + i + " = " + tableNumber * i);
// }

// Question#5 complete
