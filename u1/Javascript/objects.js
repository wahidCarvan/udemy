// objects
var person = {
	name: "Wahid",
	age: 31,
	city:"brooklyn"
};
// retrieving data 
console.log(person['name']);
console.log (person.name);
.notation will not work if it starts with a number
you cant use . notation if properety has a space in it


updating data
var person = {
	name: "Wahid",
	age: 31,
	city:"brooklyn"
};
adds one to my age and changes my city
Comparing arrays and objects

person['age']+= 1;
person.city= 'london';

adding to an object

person['race']= 'afghan';

person.race='afghan'
changing values in an object

person.name="wahid carvan"

obects nested in side of arrays
and vice versa

var posts =[
{
	title='cats are very nice',
	author="carvan"
},
{
	title= "cats are awesome",
	author= 'cat lover'

}

]
accesing the first post in the arrays

posts[0].title 
returns 'cats are very nice'


var someObject = {
	friends:[
		{name: "Malfoy"}
		{name:"crabbe"}
		{name:"guyle"}
	],
		color: 'baby blue'
		isEvil: true
	
};

someObject.friends.name[0]

make an array of movie objects

var movies =[
{ title: 'In bruges',
hasWatched: true,
rating:5
},
{
	title:'frozen',
	hasWatched: false,
	rating:4.5
}
have
]
movies.forEach(function(movie)){
	var result="you have ";
	if(movie.hasWatched){
		result += "watched ";
	}else{
		result+=" not seen ";

	}
	result += "\"" +movie.title + "\" - ";
	result += movie.rating+'stars';
	console.log()
}
