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
