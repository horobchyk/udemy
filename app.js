//Log to console
/*
console.log('Hello') // String
console.log(123+123) // Number
console.log(true) // Borlean
var greetings = 'Variable Hallo'; 
console.log (greetings) //Variable
console.log({a:1,b:2})
console.table({a:1,b:2})
console.error ('This is some error')
console.warn('This is a warning')
console.time('Hello')
  console.log('Hello') 
  console.log('Hello') 
  console.log('Hello') 
  console.log('Hello')
  console.log('Hello') 
console.timeEnd ('Hello') 
console.clear();


/*
console.clear();
console.log(39+33);
console.log((4+6+9)/77);
console.log(3,5,9,12);
let a = 10
console.log(100*a-1)
let b = a*10
console.log(a*b+b);*/
/*
const numbers = [1,2,3,4,5,6]
console.log(numbers)
numbers.push(60000)
console.log(numbers)
console.log(typeof numbers)
const hobbies = ['movies', 'music']
console.log(hobbies)
console.log(typeof hobbies)*/

/*
Multiline
*/
/*
let val;
val = String(555);
val = String(555+555)
val1 = Number (new Date())
//
console.log(val)
console.log (typeof val)
console.log (val.length)
console.log (val1.toFixed(2))
*/
/*
const intro = "Hallo "
console.log(intro)
const intro2 = ' Herr Maus'
console.log(intro2)
const joined = `Hallo ${intro2}`
console.log(joined)
console.clear();
let a = 5
let b = 10
result = a + b
//alert(result);
console.clear()
//lert("2">"12")


const name1  = "Cornelius";
const name2 = "Breede";
let val;
val = Math.floor(Math.random() * 100 + 1)
console.log(val)
let name;
name = name1 + name2;
nameA = name1 + " " + name2  
console.log(name)
console.log(nameA)
*/
/*
const name ="Cornelius";
const age = 30;
const job = "Verkäufer";
const city = "München";
*/

// 

//Text einfügen in HTML ${XXX}
/*
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>City: ${2 +2} ${city}</li>
</ul>
`
document.body.innerHTML = html

//Arrays
numbers = [2,3,36,60,43, 23]
val = numbers.indexOf(36)

//Sortieren
val=numbers.sort(function(x,y){return x-y})

console.log(numbers)
console.log(val)

*/
/*
let val;

const today = new Date();
let birthday = new Date("12/29/1982");
val = today.getMonth()+1;

console.log(val);
*/

/*
const val = 1
if(typeof val !== 'undefined'){
  console.log('CORRECT')
}
else{console.log("INCORRECT")}
*/
// Ternery  OPERATOR

/*
let id = 101
console.log(id === 100 ? "CORRECT" : "INCORRECT")

*/
/*
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}*/
/*
const select = document.querySelector('select');
const para = document.querySelector('p');


select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
 
}*//*
const select = document.querySelector('select');
const html = document.querySelector('html');
const style = document.querySelector('p')
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  style.remove(class) = 
}


select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));
*/
/*
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);

const myNumber = Math.floor(Math.random() * 49 +1);
console.log(myNumber) 


function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
function random(number) {
  return Math.floor(Math.random()*number);
}
draw();
*/
/*
const myText = document.getElementsByClassName('is--displaynone');
console.log(typeof text)
const newString = myText.replace('is--displaynone', '');

*//*
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join();
console.log(madeAString);
// returns 'I love chocolate frogs'

function hello(name='Chris') {
  console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello();      // Hello Chris!*/
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);