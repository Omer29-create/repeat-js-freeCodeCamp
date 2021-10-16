const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  let x = person1.fullName.call(person2); 
  document.getElementById("demo").innerHTML = x;


var hello;

hello = () => {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello); //[object Window]


class Car {
    constructor(name, year) { // Constructor olusturma
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  myCar.name + " " + myCar.year; // Ford 2014
  
  let myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";


  let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text); // Js'e cevirir
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;


let x = 15 * 5;
debugger;  // Burada duracak ve 3. satira gitmeyecek
document.getElementById("demo").innerHTML = x; 


let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object


let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number


0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false


function myFunction(x, y) {
    if (y === undefined) {
      y = 3;
    }  
    return x * y;
  }
  document.getElementById("demo").innerHTML = myFunction(4); // 12

  function myFunction(x, y) {
    if (y === undefined) {
      y = 3;
    }  
    return x * y;
  }
  document.getElementById("demo").innerHTML = myFunction(4, 7); // 28


 let x = 0;
  document.getElementById("demo").innerHTML = Boolean(x == 10); // false
  
  let x = 0;
document.getElementById("demo").innerHTML = Boolean(x = 10); // true


let x = 10;
let y = "10";
document.getElementById("demo").innerHTML = Boolean(x == y); // true


let x = 10;
switch(x) {
  case 10: document.getElementById("demo").innerHTML = "Hello";
} // Hello


let x = 10;
switch(x) {
  case "10": document.getElementById("demo").innerHTML = "Hello";
}  // Calismiyor


let y = 10
y += "5";
document.getElementById("demo").innerHTML = y; //105


// Satir asagi inmek icin. Bu arada + isaretiyle de oluyor. Dikkat edilmesi gereken sonrasinda bosluk vs olmamali
let x = "Hello \
World!";  


document.getElementById("demo").innerHTML = myFunction(55);
function myFunction(a) {
  let power = 10;
  return a * power;
}


const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
document.getElementById("demo").innerHTML =
person[0] + " " + person.length;  // undefined 0  Cünkü atamalar olmadi


const person = [];
person[0] = {a : first};
person[1] = "Doe";
person[2] = 46; 
document.getElementById("demo").innerHTML =
person[0] + " " + person.length;  // John 3
