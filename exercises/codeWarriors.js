/*Your task is to write a function maskify, which changes all but 
the last 4 characters into '#'.
*/
function maskify(cc) {
    cc = cc.split("");
      for(var i = 0; i < cc.length - 4; i++){
        cc[i] = "#";
    }
    cc = cc.join("");
    return cc
    // maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);  
    //  return cc.slice(-4).padStart(cc.length,'#')
    }


/*   The Western Suburbs Croquet Club has two categories of membership, 
Senior and Open. They would like your help with an application form that 
will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap 
greater than 7. In this croquet club, handicaps range from -2 to +26; the 
better the player the lower the handicap.*/
function yasli(data) {
    return data.map(([age, handicap]) => age>54 && handicap>6 ? 'Senior' : 'Open');
}
