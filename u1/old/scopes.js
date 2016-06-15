// functions have their own scope
// scope is the context that code is excuted in
//function math(){

	//var x =40;
	//console.log(x)
//}
//math(40);

// if we define a variable outside of the function we can use it in the function

var y= 99;

function doMath()
{
	console.log(y)
}
// returns the the var 99 even tho its not inside the function
doMath() // code ends
//the function will print bye bye because the var inside the function overrides the global var
// new code
var y = "hello-world"

function some(){
	var y='bye bye';
	console.log(some);

}
some();
// code ends
// the floowing code will reutrn 99
// the var can be defined out side of the functiom and used in the function
// but if the var is defined in the function it cannot be used out side of the function
// new code
var y = 99;

function myFunction(){
	console.log (y)
}

myFunction()


function x (){

}
// code ends
// notes
//setInterval sets a time sets a set time for the code to run 
// HIGHER ORDER FUNCTIONS. FUNCTIONS CAN BE PASSED IN TO OTHER FUNCTIONS
function y(){
	console.log('something');
	console.log('something else');
	//setInterval takes 2 arguments
	//setInterval(functions name, and time);
	setInterval(y, 1000)
}
// that runs the code
setInterval(y, 1000);
// the number thats right after is used to stop the code from running
// stops the interval
// enter the number that was diplayed clearIntervan(24);

// running setinterval without a function
// runs the code with a function built in.
setInterval (function(){
	console.log("any");
	console.log("hahahaha");
	}, 2000);