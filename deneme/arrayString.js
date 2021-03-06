// random siralama
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  document.getElementById("demo").innerHTML = points;
}


// max 
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}


// year'a göre siralama
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){return a.year - b.year});
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}


// harfe göre siralamasi
function myFunction() {
  cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}


// forEach ile yazdirma
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}


// map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}


// filter
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}


// reduce
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);  // 99
// let sum = numbers.reduce(myFunction, 100);  // 199

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}

// every
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value, index, array) {
  return value > 18;
}


// some
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction); // true

document.getElementById("demo").innerHTML = "Varsa true dönecek " + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}


// find
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("demo").innerHTML = "Function'daki sarti ik saglayan sayi : " + first;

function myFunction(value, index, array) {
  return value > 18;
}


// from
const myArr = Array.from("Mehmet");
document.getElementById("demo").innerHTML = myArr;  // M,e,h,m,e,t


// keys()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";    
for (let x of keys) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text; /* 0 
                                                     1 
                                                     2 
                                                     3 */


// Object.keys(isim)
const fruits = {
  a : "Banana", 
  b : "Orange", 
  c : "Apple", 
  d :"Mango"};
  const keys = Object.keys(fruits); 
  
  let text = [];
  for (let x of keys) {
    text += x + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text; /*a
                                                      b
                                                      c
                                                      d */


//  Eleman degistirme ve ekleme
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; // {Toyota, Volvo, BMW, Audi}


// new Date()
const d = new Date();
document.getElementById("demo").innerHTML = d;
// Tue Oct 12 2021 08:40:46 GMT+0200 (Central European Summer Time)

const d = new Date("April 13, 2014 11:13:00");
document.getElementById("demo").innerHTML = d;
// Sun Apr 13 2014 11:13:00 GMT+0200 (Central European Summer Time)

const d = new Date(100000000000);
document.getElementById("demo").innerHTML = d;
// Sat Mar 03 1973 10:46:40 GMT+0100 (Central European Standard Time)

const d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();
// Tue, 12 Oct 2021 06:53:23 GMT

const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
// Tue Oct 12 2021

const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
// 2021-10-12T06:55:03.111Z

const msec = Date.parse("Jan 2, 1970");
document.getElementById("demo").innerHTML = msec;
// 82800000  millisecond - 1.1.1970

let msec = Date.parse("March 21, 2012");
const d = new Date(msec);
document.getElementById("demo").innerHTML = d;
// Wed Mar 21 2012 00:00:00 GMT+0100 (Central European Standard Time)


let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

document.getElementById("demo").innerHTML = text;
// Today is before January 14, 2100.
