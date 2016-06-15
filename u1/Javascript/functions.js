function square(num){
	alert(num * num);
}
square(5);
function greet(person1 , person2 ,person3){

	console.log(" Hi " + person1);
	console.log(" Hi " + person2);
	console.log(" Hi " + person3);
	
}
greet("Harry", "Ron", "Mike")
// intro to function
// declare a function first

function doSomething(){
	console.log("hello World");
}
doSomething(); // prints hello world


function singSong(){
	console.log(' twinkle')
	console.log('how')
	console.log("i")
	console.log("wonder")
	console.log("yes")
}
singSong();

function square(num){
	console.log(num * num)
}
square(5); // prints 25
square(10); // prints 100
square(4); // prints 16

function sayHello(name){
	console.log("Hello There " + name + "!");
}

sayHello('charlie');
// prints out hello there charlie
// having functions return

function square(x){
	console.log(x*x);
}
square(4)

// writiing functions which return true if number is even and false if it is odd


function isEven(num){
return num % 2===0;
}
// call the function 
isEven(4) returns true

isEven(5) reutrns false

// replace dashes with underscores

function kebabToSnake(str){
	var newStr = str.replace(/-/g,"_");
	return newStr
}
kebabToSnake(Hello-World)

// writing functions if number is even return true otherwise return false

function isEven(){
	
}