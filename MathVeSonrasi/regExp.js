const obj = /e/.exec("The best things in life are free!");
document.getElementById("demo").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text : " + obj.input;


function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch (err) {
      message.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
  }


let num = 1;
try {
  num.toUpperCase();
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


  myFunction();
// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
   carName = "Volvo";
}


var x = 5;  // Initialize x

elem = document.getElementById("demo");      // Find an element 
elem.innerHTML = "x is " + x + " and y is " + y;  // Display x and y

var y = 7;  // Initialize y
