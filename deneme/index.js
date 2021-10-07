/*let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
console.log(catTalk());

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
*/
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); // hata veriyor

/*
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));  Hello John
console.log(greeting());  */

/*
const increment = (number, value=1) => number + value;
console.log(increment(3, 7)); */

/*function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));   //  You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { }, "Merhaba")); // You have passed 4 arguments.*/

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];  

console.log(arr2);

const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(HIGH_TEMPERATURES.today);


const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
//const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;  
const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
const [a, b, ...arr] = list; 
return arr;
}
const arr = removeFirstTwo(source);


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({ max, min }) => (max + min) / 2.0; 
  console.log(half);

  const profileUpdate = ({ name, age, nationality, location }) => {

}

/*The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?*/
  function main() {
    var depth = parseInt(readLine(), 10);  
    i = 0;
   
    for (; depth > 0;) {
        i++;
       
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(i);
}


function main() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
    //assign a flight object to flight1 variable
    var flight1 = new Flight(flightNumber, flightStatus);
    
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
}


function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};


function main() {
  var prodID = readLine();
  var price = parseInt(readLine(),10);
  var discount = parseInt(readLine(),10);
  
  var prod1= new Product(prodID, price);
  console.log(prod1.prodID + " price: " + prod1.price);
  
  prod1.changePrice(discount);
  console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;

  this.changePrice = function (discount) {
      this.price = price - ((discount/100)*price)
  }
}

function contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = function(){
      console.log(this.name + " : " + this.number);
  }
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for(let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
return failureItems;
}
const failuresList = makeList(result.failure);


class Thermostat {
  constructor (fahrenheit){
    this.fahrenheit = fahrenheit;
  }
  get temperature(){
    return (5/9) * (this.fahrenheit - 32);
  }
  set temperature(celcius){
    this.fahrenheit = (celcius / 9.0) / 5 +32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
  
  makeServerRequest.then(result => {
  console.log(result);
});

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});



function main() {
  var year = parseInt(readLine(), 10)
  
  //the output
  console.log(calcCent(year));
  
  function calcCent(){   
      var calculation = year / 100;
      return Math.ceil(calculation);
  }
}


function main() {
  var increase = parseInt(readLine(), 10);
  var prices = [98.99, 15.2, 20, 1026];
  //your code goes here
  console.log(prices.map(x=>x+increase));
}


function setText() {
  var a = document.getElementById("demo");
  var arr = a.childNodes;
  for(var x=0; x<arr.length; x++) {
     arr[x].innerHTML = "new text";
  }
}
//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

let extractStr = "Extract the word 'coding' from this string."; 
let codingRegex = /coding/; 
let result = extractStr.match(/coding/); 

console.log(codingRegex);
console.log(result);/* [ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ]*/


let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  var parent = document.getElementById("demo");
  var child = document.getElementById("p1");
  //parent.removeChild(child);
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 100) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};

window.onload = function() {
  var btn = document.getElementById("demo");
  btn.addEventListener("click", myFunction);

  function myFunction() {
      alert(Math.random());
      btn.removeEventListener("click", myFunction);
  }
};

//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);



var images = [
  'http://www.sololearn.com/uploads/slider/1.jpg', 
  'http://www.sololearn.com/uploads/slider/2.jpg', 
  'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
  var slider = document.getElementById('slider');
  num++;
  if(num >= images.length) {
      num = 0;
  }
  slider.src = images[num];
}
function prev() {
  var slider = document.getElementById('slider');
  num--;
  if(num < 0) {
      num = images.length-1;
  }
  slider.src = images[num];
}

function validate() {
  var n1 = document.getElementById('num1');
  var n2 = document.getElementById('num2');
  if(n1.value != '' && n2.value != '') {
      if(n1.value == n2.value) {
          return true;
      }
  }
  alert("The values should be equal and not blank");
  return false;


  function findLongestWordLength(str) {
  str = str.split(' ');
  const wordLengthArr = str.map(word => word = word.length);
  return Math.max(...wordLengthArr); 
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//return Math.max(...str.split(" ").map(word => word.length));



function largestOfFour(arr) {
  let results = [];
   for (let i = 0; i < arr.length; i++) {
     let largestNumber = arr[i][0];
     for (let j = 1; j < arr[i].length; j++) {
       if (arr[i][j] > largestNumber) {
         largestNumber = arr[i][j];
       }
     }
     results[i] = largestNumber;
   }
   return results;
 }
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 
 /*return arr.map(function(group) {
     return group.reduce(function(prev, current) {
       return current > prev ? current : prev;
     });
   });
   
   return arr.map(Function.apply.bind(Math.max, null));*/


   function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target; 
  }
  
  confirmEnding("Bastian", "an");
  /* let re = new RegExp(target + "$", "i");
     return re.test(str);
     
     return str.slice(-target.length) === target*/


     function findElement(arr, func) {
      let num = 0;
      for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
          console.log(num);
          return num;   
        }
      }
      return undefined;
    }
    
    findElement([1, 3, 4, 8, 20], num => num % 2 === 0);


    function titleCase(str) {
      var convertToArray = str.toLowerCase().split(" ");
      var result = convertToArray.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
      });
      return result.join(" ");
    }
    
    titleCase("I'm a little tea pot");


    function frankenSplice(arr1, arr2, n) {
  
      let localArr = arr2.slice();
      localArr.splice(n, 0, ...arr1);
      return localArr;
    }
    
    frankenSplice([1, 2, 3], [4, 5, 6], 1);


    function chunkArrayInGroups(arr, size) {
      let newArr = [];
      for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }
      return newArr;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
    
    /*
     let newArr = [];
      while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
      }
      return newArr;
    */


      function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype.numLegs = 4;
      let beagle = new Dog("Snoopy");
      let ownProps = [];
      let prototypeProps = [];
      // Only change code below this line
      for(let abc in beagle) {
        if (beagle.hasOwnProperty(abc)) {
            ownProps.push(abc);
        } else {
            prototypeProps.push(abc);
        }
      }
      console.log(ownProps);
      console.log(prototypeProps);



      function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype = {
        numLegs: 4,
        eat: () => {
          console.log("fasa");
        },
        describe: () => {
          console.log("sdges" + this.name);
        }
      };


      let funModule = (function(){
  return {
    isCuteMixin : function(obj) {
    obj.isCute = function() {
    return true;
      };
    },
    singMixin : function(obj) {
    obj.sing = function() {
    console.log("Singing to an awesome tune");
      };
    }
  };
})();


// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};
console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3


let person = {
  name: 'Jack',
  age: 18,
  gender: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2


let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});

console.log(newPerson.name); // Bob


let a = () => {
  return [1, 3, 2];
};

let [one, , two] = a();

console.log(one); // 1
console.log(two); // 2


let {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);


function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
      let num = arguments[k];
      if (arr.indexOf(num) === -1) {
          return false;
      }
  }
  return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7)); // true
console.log(containsAll(x, 6, 4, 9)); // false


let newArr = ['Three', 'Four']; 
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr); // ["One", "Two", "Three", "Four", "Five"]


const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge (obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge ({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }


class Rectangle {
  constructor(height, width) {
      this.height = height;
      this.width = width;
}
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 

console.log(square.height);


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Super
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak();
// Rex makes a noise.
// Rex barks.


/* Map Methods
set(key, value)   Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key)          Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key)          Returns true if a specified key exists in the map and false otherwise.
delete(key)       Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear()           Removes all key/value pairs from map.
keys()            Returns an Iterator of keys in the map for each element.
values()          Returns an Iterator of values in the map for each element.
entries()         Returns an Iterator of array[key, value] in the map for each element. */


let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);let map = new Map();
    map.set('k1', 'v1').set('k2', 'v2');
    
    console.log(map.get('k1')); // v1
    console.log(map.has('k2')); // true
    
    for (let kv of map.entries())
        console.log(kv[0] + " : " + kv[1]);  /* v1 
    true
    k1 : v1 
    k2 : v2 
    
    Methods
add(value)      Adds a new element with the given value to the Set.
delete(value)   Deletes a specified value from the set.
has(value)      Returns true if a specified value exists in the set and false otherwise.
clear()         Clears the set.
values()        Returns an Iterator of values in the set.*/


setTimeout(function() {
  console.log("Work 1");
  setTimeout(function() {
      console.log("Work 2");
  }, 1000);
}, 1000);
console.log("End");


function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
      if (work === "")
          reject(Error("Nothing"));
      setTimeout(function() {
          resolve(work);
      }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
}, function(error) {
  console.log(error);
})
.then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});
console.log("End"); /*
End 
Work 1 
Work 2 */


let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
  }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]


const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);  // 10


[4, 5, 1, 8, 2, 0].filter(function (x) {
  return x > 3;
})[0];

[4, 5, 1, 8, 2, 0].find(x => x > 3);


console.log(Array(3 + 1).join("foo")); // foofoofoo

console.log("foo".repeat(3));


console.log("SoloLearn".startsWith("Solo", 0)); // true
console.log("SoloLearn".endsWith("Solo", 4)); // true
console.log("SoloLearn".includes("loLe")); // true
console.log("SoloLearn".includes("olo", 1)); // true
console.log("SoloLearn".includes("olo", 2)); // false



