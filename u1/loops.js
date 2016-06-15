print all numbers between -10 and 19

var num = -10;
while( num < 20){
	console.log (num);
	num ++;
}
//print all even numbers between 10-40

var counter = 10;

while(counter <= 40){
	console.log(counter);
	counter +=2;
}

// using a if statement 
var counter= 10;
while(counter <= 40){
	if(counter % 2 === 0){
		console.log(counter);
	}
	counter+=1;
}

// printing all odd numbers between 300- 333
var counter = 300;

while(counter <= 333){
	if(counter % 2 !==0)
	console.log(counter);
	counter +=1;
}


//printng all numbers divisble by 5 and 3 between 5-50
var counter = 5;

while(counter <= 50){
	if(counter % 5 ===0 && counter % 3===0)
	console.log(counter);
	counter +=1;
}

// are we there yet


var answer= alert("Are we there yet?");
while(answer!== "yes" && answer !== "yeah"){
	var answer=prompt("are we there yet?")
}


// version 2 check if the string contans yes

var answer= alert("Are we there yet?");
// it means yes does not exist in out answer
while(answer.indexOf("yes")===-1){
	var answer=prompt("are we there yet?")
}






