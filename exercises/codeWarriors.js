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
