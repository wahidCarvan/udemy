scope is the context  that code is executed in

function doMath(){
	var x = 40;
	console.log(x);
}
doMath();

when a variable is defined outside of the function it can be used inside the function
but when the variable is decalred inside of the function it can not be used out side of the function
higher order fucntions


function sing(){
	console.log('something somehting')
	console.log('something somehting')
}
setInterval(sing, 1000)

// setting the time before decalring the function

setInterval(function(){
	console.log("I am anonymous function!");
	console.log("This is awesome!");
}, 2000)
// the code above will run every 2 seconds
