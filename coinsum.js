var coinsum = function(denominations,total){
    //array to hold possible change combination
    var change = [];
    var currentChange = [];
    var makeChange = function(currentTotal,denominations,currentChange){
     
        if (currentTotal === total){
            //we've found a working combo
            change.push(currentChange);
            return;
        }
        if (currentTotal > total){
            //bad combo move on to the next
            return;
        }
       
        for (var i = 0; i < denominations.length; i++){
            var currentDenom = denominations[i];
            makeChange(currentTotal+currentDenom,denominations,currentChange.concat(currentDenom));
            
        }
    }
    makeChange(0,denominations,[]);
    return change;
}

coinsum([1,2,3],5);


