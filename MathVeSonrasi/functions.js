(function () {
  document.getElementById("demo").innerHTML = "Hello! I called myself";
})();   // Hello! I called myself


function myFunction(a, b) {
  return arguments.length;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);  // 2
