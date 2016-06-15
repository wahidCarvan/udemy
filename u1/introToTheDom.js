// // manipulating the dom

// var h1 = document.querySelector('h1');
// h1.style.color='blue'
// select the body and change every second

// var body = document.querySelector('body');
// // selecting by id

//  var id= document.getElementById('highlight');


//  var tags= document.getElementByClassName('bolded');

//  var tag= document.getElementByTagName('li')


//  var tag=document.querySelector('#highlight');
//  // returns all ids with highlight
//   var tag=document.querySelectorAll('#highlight');


// 4 different ways to select the p tag   <p id="first" class="special">Hello</p>
document.getElementById("#first")
// gives us the first one 
document.getElementByTagName('p')[0]
// we added 0 at the end sinxe there is more than one p wit the same class name

document.getElementByClassName(".special")[0]
document.querySelector('#first')

// dom manipulation
var h1= document.querySelector('h1')

h1.style.color='yellow';
adding classes to element 
var element =document.querySelector('class')
element.classList.add('name of class')
// .remove removes the class
element.classList.remove('name of class')
replacing the content inside of html
<p> I am a <strong> powerful</strong> man.
var p =document.querySelector('p')

p.textContent=' enter some text'
// returns removes the strong

I am a  powerful man.
overwrites html

var p =document.querySelector('p')

p.innerHTML 
replacing htm content
document.querySelector('p').textContent='some text'

selecting the whole page
document.body.textContent

manipulating attributes

attributes are images and websites
var image1 = document.querySelector('img')[0]
img1.setAttribute('src', 'the  new website');

changing website

var a = document.querySelector('a');
a.setAttribute('href', 'new website.')
changing the text that user clicks that makes them go to the website

a.text='link to the website'
