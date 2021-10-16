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
