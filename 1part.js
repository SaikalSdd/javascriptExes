//for (var i = 0; i < 10; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }
//};
//Что выведет консоль и почему?
Вывело: "Uncaught SyntaxError: missing ) after argument list"
После добавления ")": "Uncaught SyntaxError: Unexpected token )"

I think, the problem is in that, we didnt set timeout value:
setTimeout(функция, 10000); 
Функция сработает после 10000миллисекунд.

//Write a JavaScript program to display the current day and time in the following format.  
//Sample Output : 
//Today is : Friday. 
//Current time is : 4 PM : 50 : 22
var date = new Date();
var dateNum = date.getDay();
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log("Today is : " + dayName[dateNum]);
console.log("Current time is: " + date.getHours() + "PM :" + date.getMinutes() + " : " + date.getSeconds())

//Write a JavaScript function that reverse a number. 
//Example x = 32243;
//Expected Output : 34223

var num=prompt("Enter a number: ", "your num");
function reversing(num){
  str = num.toString().split("").reverse([]).join("");
  return str;
}
reversing(num);

//Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
//For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
var num=prompt("Enter a number: ", "your num");
function fact(num) { 
  if (num === 0){
    return 1;
 }
  return num * fact(num-1);        
}
alert(fact(num));

// Write a JavaScript program that accept two integers and display the larger.
var num1 = prompt("Enter your first num: ","num1");
var num2 = prompt("Enter your second num: ","num2");

if (num1>num2){
  var result= num1;
}
else if(num1<num2){
  var result= num2;
}
alert(result+" is larger");

//Write a simple JavaScript program to join all elements of the following array into a string. 
//Sample array : myColor = ["Red", "Green", "White", "Black"];
//Expected Output : 
//"Red,Green,White,Black"
//"Red+Green+White+Black"
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(" "));

//Write a JavaScript function to get the month name from a particular date. 
//Test Data :
//console.log(month_name(new Date("10/11/2009"))); 
//console.log(month_name(new Date("11/13/2014")));
month_list=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function month_name(which_date){
  return (month_list[which_date.getMonth()])
}
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));

//Write a JavaScript program to test the first character of a string is uppercase or not
char = prompt("Write your word:")
function check(char){
  if (char[0] === char[0].toUpperCase()){
    return "Yes. It is in upper case";
  }
  return "No. It is in lower case";
}
alert(check(char));

//Write a JavaScript program to draw a smile 


