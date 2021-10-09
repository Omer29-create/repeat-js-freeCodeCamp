// The global variable
var s = [23, 65, 98, 5];


Array.prototype.myMap = function(callback) {
  var newArray = [];
  //this.forEach(a => newArray.push(callback(a)));

  for(let i=0; i<this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});


var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  
  var newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    
  };

  

  return newArray;
});

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


const squareList = arr => {
  return arr
      .filter(a => a > 0 && Number.isInteger(a))
      .map(x => x * x);
  };
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);



var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    
return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}
console.log(nonMutatingSort(globalArray));
}

function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");


function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}


function checkPositive(arr) {
  return arr.every(function(a){
    return a > 0 ? true : false;
  })
}
checkPositive([1, 2, 3, -4, 5]);
// return arr.every(val => val > 0);


function add(x) {
  return function(y) {
     return function(z) {
       return x + y + z;
     };
   };
   // return y => z => x + y + z;
 }
 add(10)(20)(30);


 function sumAll(arr) {
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);
