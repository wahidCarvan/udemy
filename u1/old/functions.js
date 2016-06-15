$(document).ready(function () {
	







// intro to functions
function sayHi(){
	alert("hello")
alert("say yes")
}

// call function and it will print hello and say yes sayhI() is calling the function
sayHi()

alert('testing')
// 
function singSong(){
console.log



}
// function name (agrument)
function square (num){

	console.log (num * num )
}


// name is just a place holder. It needs to be defined when calling h function after the curly braces.
function sayHello(name){

	console.log("Hello "+ name + "!")
}

sayHello("Rusty")



// functions can hold many arguments

function area (length, width){
	console.log(length * width);
}
area(9,9);

// functions return key word
function square(x){
	return x*x;
}
square(4)
// will return 16

' 4 squared is: ' + square(4)

// will reutrn 4 squared is: 16


// this function capitalizes the first char in a string
function capitalize(str){
	// chartAt takes the first letter and capiyalizes it str.slice takes after the first letter which is zero and adds it back to the string
	return str.charAt(0).toUpperCase()+ str.slice(1);

}

var city='paris';
var capital=capitalize(city);


function test (x){
	return x*2; // only the first return runs
	console.log(x); // will not run
	return x /2; // will not run

}
test(40);
// returns 80 because after the first return code nothing else runs

// write a function that will return true if the number is even and false if the number is false


// the above code without a if else statement
function isEven(num){
	return num % ===0; // is a boolean
}

// we need to call function isEVen(2) will return tru
// is Even(5) will return false

// writing a function kebab to snake

function kebabToSnake (str){
// replace all -'s with undersocres(_)
var newString= str.replace(/-/g, "_")
return newString;
}










});