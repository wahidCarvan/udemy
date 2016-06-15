var friend1 ="charlie"
var friend2 ="liz"
var friend3 ="david"
var friend4 ="mary"

var friends['charlie', 'liz', 'david', 'mary'];
console.log(friends[0]) prints charlie
// making changes

firends[0] ='chuck' // replaces charlie with chuck
firends[1] ='jen'// replaces jen with liz

// array built in methods

push/pop
shift/unshift
indexOf
slice

push adds to the end of the array
var colors=['green', 'red', 'yellow', 'pink'];

colors.push('indigo')
colors.pop() removes the last item

colors.unshift('infared') adds to the begining of the array

colors.shift(); removes the first item in the array

colors.indexOf('red') returns 1



var fruits =[ 'apple', 'orange', ' lemon', 'mango'];
var citrus =fruits.slice(1,3);
var citrus= fruits.slice(); // copies the whole array
// array nested in an array
var friendGroups =[
['harry', 'ron','hermione']]
['malfoy', 'crabbe','goyle']]
['mooney', 'wormtail','prongs']
];
console.log(friendGroups[2][0]);

// prints mooney


// printing reverse the numbers 1-5

function printReverse (array){
	for(var i = array.length-1 ; i >= 0; i--){
		console.log(array[i]);
	}
}
printReverse([1,2,3,4,5]);
// printing reverse a-f

function alphabet(x){
	for( var i= x.length-1; i>=0; i--){
		console.log(x[i]);
	}
}
alphabet(['a','b','c','d','e','f']);
// is uniform
function isUniform(array){
	var first=[0];
	for(var i=1; i<array.length; i++){
		if(array[i]!== first){
			return false;
		}
	}
	return true;
}
// sum array

function sumArray(array){
	var total =0;
	array.forEach(function)element){
	total += element;
});
return total;
}


// *** max() ***

function max(array){
	var max = array[0];
	for(var i = 1; i < array.length; i++){
		if(array[i] > max){
			max = array[i];
		}
	}
	return max;
}