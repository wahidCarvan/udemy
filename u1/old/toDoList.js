$(document).ready(function(){
	console.log('ready');

var toDos=["Buy a new turtle"];

var input= prompt("what would you like to do?");

while(input!=="quit"){

if(input==="list"){
	console.log(toDos);
} else if(input==="new"){
	// ask for new todo
	var newToDo =prompt("enter a new todo")
// adds to the todos array
toDos.push(newToDo);
}


































