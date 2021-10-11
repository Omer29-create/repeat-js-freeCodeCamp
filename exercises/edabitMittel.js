// Create a function which returns the number of true values there are in an array.
function countTrue (arr) {
    return arr.filter(a => a === true).length;
}


/*Christmas Eve is almost upon us, so naturally we need to prepare some milk 
and cookies for Santa! Create a function that accepts a Date object and returns
true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind 
JavaScript's Date month is 0 based, meaning December is the 11th month while 
January is 0.*/
function timeForMilkAndCookies(date) {
	return date instanceof Date && date.getMonth() === 11 && date.getDate() === 24;
    // return /Dec 24/.test(date+"");
}


/*This challenge will help you interpret mathematical relationships both 
algebraically and geometrically. Create a function that takes a number (step) 
as an argument and returns the number of matchsticks in that step. See step 
1, 2 and 3 in the image above.*/
function matchHouses(step) {
    return step === 0 ? 0 : step * 4 + (step + 1);
    // return step === 0 ? 0 : 5 * step + 1;
  }
