/*Problem Statement

We define super digit of an integer x using the following rules:

Iff x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the digit-sum of x. Here, digit-sum of a number is defined as the sum of its digits.
*/

var superDigit = function(n){
    if (n){
        var digits = (""+n).split("");
        if (digits.length === 1){
            return digits[0];
        }
        
        //reduce
        var reduced = 0;
        for (var i = 0; i < digits.length; i++){
            reduced += parseInt(digits[i]);
        }
        return superDigit(reduced);  
    } else {
        return 'sorry not a number'
    }
  
}


