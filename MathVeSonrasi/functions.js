(function () {
  document.getElementById("demo").innerHTML = "Hello! I called myself";
})();   // Hello! I called myself


function myFunction(a, b) {
  return arguments.length;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);  // 2


function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
document.getElementById("demo").innerHTML = findMax(4, 5, 6);  // 6


function myFunction(a, b) {
  return a * b;
}
window.myFunction(10, 2);    // Will also return 20 window yazilmasa da olur


let x = myFunction();
function myFunction() {
  return this;
}
document.getElementById("demo").innerHTML = x;  // [object Window]


// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;


const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1); // John Doe
person.fullName.call(person1, "Oslo", "Norway"); // Oslo Norway
