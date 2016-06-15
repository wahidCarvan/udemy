$(document.).ready(function(){
// arrays
// arrays use []
var friends =[ "jen", "zz", "me", "jim"];
console.log(friends[0]); // will return jen
friends[1] + friends[2] // will return zz and me

friends[0]="Mary";// will change jen to maryy
friends[3]="Tony";// will change jim to tony
friends[4]="Mike"; // will add mike to the list

var friends=[];  // a new array to store data
// arrays can hold any type of data and they dont have to match


var nums=[ 1, 'jen', true, 66];

nums.length //will return 4 since there are 4 items in the array

// array built in functions
// push/pop
// push is used to add something to the end of an array
// pop removes the last item from the array
var colors=[ 'red', 'green','yellow',]
colors.push('blue'); // adds the color blue to the array


var colors=[ 'red', 'green','yellow',]
colors.pop(); // removes yellow from the list

// unshift and shift 
// unshift adds to the front of the array
// shift removes from the beggining of the array

var colors=[ 'red', 'green','yellow',]
colors.unshift('blue'); // adds blue to the begginging
var colors=['blue', 'red', 'green','yellow' ]


var colors=['blue', 'red', 'green','yellow' ]
colors.shift(); // removes blue

var colors=[ 'red', 'green','yellow' ]


// indexOf finds the index of an item in an array

var people=['paul', 'tom', 3, 2, 1]
people.indexOf('tom'); // will return 1 since he is the second one on the list -1 means not present in the array

// use slice to copy parts of an array without altering its info

var fruits=['orange','apple', 'kiwis', 'melons']

// make a new variable to store the info that was copied

var citrus= fruits.slice(1,3)
// will return apple aand kiwis i started at one because i wanted apples i ended at 3 because i wanted kiwis but not melons
var citrus= ['apple', 'kiwis']


// nesting arrays in arrays

var names = [
[1,2,3,4,5],
[6,7,8,9,10],
[55,88,77,334,]
];
console.log(names[2][0]); // returns 55 first numbers is the arrays list there is 3 


});