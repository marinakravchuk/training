/* 1 */
function makeMinus(num){
    if( num > 0 ) {
        let numMinus = num * -1; 
        return numMinus;
    }
    else{
        let numMinus = num ;
        return numMinus;
    }
}


/* 2 */

function checkValue(val) {
    if( typeof(val) === "boolean"){
return "true";
    }
    else{
        return "false"
    }
}


Тернарные операторы

/* 2 */
function checkValue(val) {
   return typeof(val) === "boolean" ? "true" : "false";
    }