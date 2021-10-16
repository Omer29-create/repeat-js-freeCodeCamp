function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x = document.getElementById("demo");
    x.innerHTML = Array.isArray(fruits);
  }  // true


var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}


const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age; // John, 30


var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };
  // Set an object property using a setter:
  person.lang = "en";
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang; // en


// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
  };
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });
  // Enumerate Properties
  txt = "";
  for (var x in person) {
    txt += person[x] + "<br>";
  }
  document.getElementById("demo").innerHTML = txt; /*John Doe EN*/


// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO"
  };
  // Change a Property:
  Object.defineProperty(person, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
  });
  // Change language
  person.language = "en";
  // Display language
  document.getElementById("demo").innerHTML = person.language; // EN


 // Create object with an existing object as prototype
Object.create(parent, donor)

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)


let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + " ";
}

document.getElementById("demo").innerHTML = text; // J a v a s c r i p t


const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;  // 3 sn sonra yazi gözükecek
  });


  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;
  
  document.getElementById("demo").innerHTML = person[id] + " " + person.id;  //140353 undefined


  function sum(...args) {
    let sum = 0;
    for (let abc of args) sum += abc;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  
  document.getElementById("demo").innerHTML = x; // 326


  const fruits = {Bananas:300, Oranges:200, Apples:500}; 

  let text = "";
  for (let [meyve, fiyat] of Object.entries(fruits)) {
    text += meyve + " : " + fiyat + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;


  const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  document.getElementById("demo").innerHTML = Object.values(person);
  // firstName,lastName,age,eyeColor


  async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();
