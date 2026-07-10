/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   let i = digits.length-1;
   let one = true;
   while(i>=0){
       
        if(digits[i] < 9){
            digits[i] =digits[i]+1;
          return digits;
            
        }else{
            digits[i]= 0;
            i--;
        }
    }
    digits.unshift(1);
    return digits
};