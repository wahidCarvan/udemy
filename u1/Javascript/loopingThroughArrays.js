// looping through an array
// start the array and store it in a variable
var colors =['red', 'orange', 'yellow', 'green'];
// use a for loop to itterate through the array
for(var i =0; i < colors.length; i++){
	 console.log(colors[i]);
}
// using a for each to do the above code
var colors =['red', 'orange', 'yellow', 'green'];
// color is a place holder and can be called anywhere
colors.forEach(function(color){
	console.log(color)
});

// using a foreach to loop through an aarrya of numbers

var numbers=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(num){
if(num % 3===0){
	console.log(num)
}

});