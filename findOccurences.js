//Count the occurences of an element inside a list.

var findOccurences = function(array,target){
	var occurentCount = 0;
	//base case
	var occured = function(currentValue,index){
		//base case - list exhausted 
		if (index === array.length){
			return;
		}
		if (currentValue === target){
			occurentCount++;
		}

		occured(array[index],index+1)
	}
	occured(array[0],0);
	return occurentCount;
}