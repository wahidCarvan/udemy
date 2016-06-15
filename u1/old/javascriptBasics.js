$(document).ready(function(){
 all javascript goes here below the above code

 Javascript basics primitvate data types

1. Numbers decimals whole numbers and negative numbers
2.Strings they are between quotes
3.Booleans returns true or false
4.null means nothing
5.undefined means it doesnt have a value yet

% Modulo returns the remainder when 2 numbers are divided
javascript follows the order of operations

cocatention is adding Strings
*/
/*"Hello " + " World"
returns Hello World
access single charaters using the index method
"hello"[0]
returns h
the escape character
/
"She said /"goodbye/""
returns " She said "goodbye" "

variables store data
var name="Rusty";
//calling varables
name will return Rusty
"hello there " + name = Hello there Rusty
// we can also update existing variables
// changes the name from robert to bob
var name='robert';
name ='bob'; 


javascript built in methods

alert makes a pop window
prompt askes a question
console.log(); displays in the browser
 asking user their full name

var firstName = prompt("what is your first name?");
var lastName = prompt("what is your last name?");
var age = prompt("what is your age?");

console.log(firstName +" "+ lastName +" "+ age);

 Age calculator

var age = prompt( "How old are you?");
var days= (age * 365);
console.log("You are" + "" +age+" "+ days + "days old.");


Boolean Logic returns true or false
everything starts with the idea that a statement is either true or false

Comparison Operartors4
> greater than
>= greater than or equal to
< less than
<= less than or equal to
==  equal to
!=not equal to
=== equal value and equal type
!==  not equal value and equal type
&& and requires both sides to be true
|| or requires one side to be true if the left side is true the right side automatically becomes true

! not
x < 10 && x !== 5 false
y>9 || x ===5 true
x=5
y=9
!(x===y) false
JavaScript conditionals
making decsions with code
3 conditional key words
if 
else if 
else
if you are younger than 18 
	you cannot enter the venue
if you are between 18-21 
	you can enter but not dance
if you are 21> you may enter and dance
var age = prompt("What is your age?")
	if (age <18){
		alert("sorry you are to young!")
// else if runs if returns false
	}else if(age <21){

		alert("you may enter, but you cant dance!")
// else runs if else if and if returns false
	}else(age >= 21){


	};

	var age =prompt("What is your age?");
if(age<0){
	alert("come back once your even!");
}else if(age ===21){
	alert("come on in!");
}else(age % 2 !==0 )
alert("your age is odd.")
*/


// building s simple guessing game
// make a secret numbe for user to guess
var secretNumber=8;
// ask user for a guess
var userGuess=prompt("Guess a number!");
var guess= Number(userGuess);
// check if guess is right
// Number(guess) converts the number from s tring to a number
if (guess === secretNumber){
	alert("You win!");
} else if (guess<8){
	alert("your guess is to low");
} else(guess>8)
	alert("Number is to high!");


While loops
reapeats code while a condition is true

printing the numbers 1-5 step by step

var count = 1;
while(count <= 5);{
console.log("count is; "+ count);
count++; // adds one to the number
}
1
2
3
4
5
stops when it hits 5
// printing each character in a string
var str = 'hello'
var count = 0;
while(count < str.length){
	alert(str[count]);
	count++;
}

print all numbers between -10 and 19
10 and 40 even numbers
odd numbers 300 and 333
numbers divisible by 5 and 3 between 5 and 50
// printing the numbers between -10 and 19
var number -10

while(number <= 19){
	console.log(number);
	count++;
}
// printing all the even numbers between 10 and 40

var number = 10;

while(number<= 40){
	console.log(number);
	number+=2;
}
// other way of doing it.
while(number<= 40){
	if(number % 2===0){

	
	console.log(number);
	}
	number+=1;
}
// print all odd numbers between 300 and 333

var number = 300;

while(number<= 333){
	if(number % 2!==0){

	
	console.log(number);
	}
	number++;
	}
//print all numbers divisible by 5 and 3 between 5 and 50

var number = 5;
while(number<=50){
	if(number % 5===0 && number % 3===0){


console.log(number);
}
number==1;
}


// Building a game using while loops are we there yet?

var answer = prompt ("Are we there yet?")
while(answer != 'yes' && answer != "yeah"){
	var answer = prompt ("Are we there yet?") 
}
alert("yeah")


// version 2 as long as they type a sentence with the yord yes in t

var answer = prompt("Are we there yet?");
while(answer.indexOf('yes')===-1){// that means yes does not exist in the answer
	var answer =prompt('are we there yet?');
}

alert("YAy We made it.")

// for loops
for( declare a variable ; condition; step){

}
// printing the numbers 1-5
for( initialize; condition; step){

}
for (count =0; count <= 5; count++){
	console.log(count);
}


// printing every charachter in a string using a for loops

var string='hello';
for ( var i =0;i <string.length;i++){
	console.log(string[i]);
}
h
e
l
l
o
// print all numbers -10 and 19
//while(number <= 19){
	//console.log(number);
	//count++;
 //}

for(var i =-10; i <20; i++){
	console.log(i)
}

// print ALL EVEN numbers between 10 and 40
for(var i =10; i <=40; i+=1){
	if(i % 2 ===0){
		console.log(i)
	}
	console.log(i)
}
// prinintg odd numbers between 300-333
for(var i = 300; i <= 333; i++){
	if( i % 2===0){
		console.log(i)
	}
}


// functions

function doSomeThing(){
	// everything between the curly braces is part of the function.
	console.log("Hello World!");
}
doSomeThing(); //calls the function

// returns Hello World!


function square(number){
	console.log(number * number)

}
// define the function here
square(10)
square(5)
// returns 100
// returns 25 functions can be called more than once


function sayHello (name){
	console.log("hello there " + name + "!");
}
sayHello("Charlie")

// prints hello there charlie


functions can hold multiple arguments

function area (length,width){
	console.log(length*width);
}
area(9,2); //returns 18

// writing functions using the return keyword

function square(x){
	console.log(x*x);
}
square(4) // shows 16


function square(x){
	return x * x;
}

"4 squared is:" + square(4)
// returns 4 squared is 16
var result = square(104); // returns 10816
// this function capitalizes the first char in a string
function capitalie(str){
	return str.charAt(0).toUpperCase() + str.slice(1);

}
var city='paris';
var capital =capitalize(city); // returns Paris


// make function
function test (x,y){
	// call function
	return y - x;
}
//define function
test(10,40);


function test (x){
	// call function
	return x *2
}
//define function
test(40);
// returns 80
// writing a function which returns true if even and false if its not even

function isEven(num){
	if (num % 2===0){
		return true;
	}
			else{
				return false
			}
		}
	
// easier way of doing the above code

function isEven(num){
	return num % 2===0; // is true or false statement
}


// write a function that changes kebabcase to snake case
function kebabToSnake(str){
	// replace all -s with _
	// return str
	var newStr =str.replace(/-/g, "_");
}
return newStr;

Scope is the context that code is executed in
https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861394


function doMath(){
	var x=40;
	console.log(x);

}
// call the function doMath()
returns 40
Higher Order functions
function sing(){
	console.log(" twinkle twinkle")
}
sing()
setInterval(sing, 1000); // set interval tells the code to run at certain time

// setInterval needs to arguments the name of the function which needs to run and the speed

to stop the interval use the number which was produced
and type clearInterval(with the number)


running code with out a predefined function
setInterval (function(){
	console.log("I am someoe!");
	console.log("yes you are!");
},2000);



Javascrpt Arrays

var friends =['Mary','Jim','Hector','Tony'];
arrays always start at index 0
console.log(friends[0]) prints x
updating  arrays
friends[0]= "Marvin"; changes mary to Marvin
adding to arrays
friends[4]='jim' adds jim to the list
we can define an array using empty square bracks

var array[];
arrays can be mixed in with different data types

arrays have a length property


arrays build in methods
push 
pop
shift 
unshift
indexOf
var colors['red', 'green', 'blue']
colors.push ('yellow')
adds yellow to the end of the array
and returns the length of the array.
colors.pop()
pop removes the last ekement in an arrays

unshift to add to the front of the arrays
shift to remove the first item in an arrays


var colors['red', 'green', 'blue']
colors.unshift('black');

var colors['black', red', 'green', 'blue']
colors.shift() removes the first item


colors.indexOf('black'); returns 0

if item is not in array it returns -1

colors.indexOf('yellow'); returns -1 because its not in the array

slice method
var fruits =['apple','lemon', 'peaches','melons'];
var newFruits =fruits.slice(1,3);

copies lemon and peaches
to copy a whole arrays

var moreFruits= fruits.slice(); copies the whole array


var friendGroups[
['harry','ron','herb'],
['mike','rauf','jim'],
['money','cash', 'dollar']
];
console.log(friednGroups[2][0]);
prints money



array iteration
use a for loop to iterate over an array
var colors=[ 'green', 'red', 'green', 'blue']
for( var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}


array iteration using a for each
for each is faster and less code
for each()


var colors=[ 'green', 'red', 'green', 'blue'];
colors.forEach(function(color){
	
	console.log(color);
});


// the color in function is place holder for the numbers so it can loop through each number
var numbers =[1,2,3,4,5,6,7,8,9,10]
numbers.forEach(function(color){
if (color % 3 ===0){
	console.log(color);
}
});


arrays problem sets

printReverse

function printReverse(arr){
	for(var i = arr.length  - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([1,2,3,4,5]);












































































































});