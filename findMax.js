var findMax = function(array){
    //if we reach the end of the list
    var max = 0;
    
    //continuously update max
    var subroutine = function(currentMax,num,list,index){
        if (index === list.length){
            max = currentMax;
            return currentMax;
        } 
        if (currentMax < num){
            currentMax = num;
        }
        for (var i = 1; i < list.length; i++){
            subroutine(currentMax,list[i],list,index+1);
        }
    }
    subroutine(max,array[0],array,0)
   return max;
}