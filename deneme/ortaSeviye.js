function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  console.log(diffArray([1, 2, 3, 5, 7, 8], [1, 2, 3, 4, 5, 9]));


  function destroyer(arr, ...a) {
    /*var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });*/
    return arr.filter(x => !a.includes(x));
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


  function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
   return collection.filter(function(obj) {
     return srcKeys.every(function(key) {
       return obj.hasOwnProperty(key) && obj[key] === source[key];
     });
   });
 }
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
 
