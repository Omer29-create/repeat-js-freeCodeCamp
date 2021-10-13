// 1. Yol
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}


// 2. Yol
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;


// 3. Yol
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}



const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
// 4. Yol
while (cars[i]) {
  text += cars[i];
  i++;
}
// 5. Yol
for (;cars[i];) {
    text += cars[i];
    i++;
  }


// continue : 3'ü atliyor : 12456789
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
  
  
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

document.getElementById("demo").innerHTML = text;


// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // List all entries
  let text = "";
  for (const x of fruits) {
    text += x + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;


  // Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})

document.getElementById("demo").innerHTML = text;


// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;


// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Delete an Element
  fruits.delete("apples");
  
  document.getElementById("demo").innerHTML = fruits.has("apples");

  fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "<br>"
  })

  for (const x of fruits.entries()) {
    text += x + "<br>";
  }


  /*
  typeof "John"                 // Returns "string"
  typeof 3.14                   // Returns "number"
  typeof NaN                    // Returns "number"
  typeof false                  // Returns "boolean"
  typeof [1,2,3,4]              // Returns "object"
  typeof {name:'John', age:34}  // Returns "object"
  typeof new Date()             // Returns "object"
  typeof function () {}         // Returns "function"
  typeof myCar                  // Returns "undefined" *
  typeof null                   // Returns "object" */



  document.getElementById("demo").innerHTML = 
  "john".constructor + "<br>" +
  (3.14).constructor + "<br>" +
  false.constructor + "<br>" +
  [1,2,3,4].constructor + "<br>" +
  {name:'john', age:34}.constructor + "<br>" +
  new Date().constructor + "<br>" +
  function () {}.constructor;

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);

function isArray(myArray) {
  return myArray.constructor === Array;
}


d = new Date();
Number(d)

d = new Date();
d.getTime()        // returns 1404568027739

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"


void printBits(char c, int size=8) {
   if(size == 0) return;
   printBits(c>>1, size-1);
   if( (c&1) ) {
      cout << 1;
   } else {
      cout << 0;
   }
}

int main() {
   printBits('a'); // output: 01100001
   printBits(255); // output: 11111111
   return 0;
}
