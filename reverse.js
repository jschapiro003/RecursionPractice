/*
	Reverse the order of the list.
	[2,7,8,3,1,4]
	Returns [4,1,3,8,7,2]
*/

var reverse = function(array){
	var reversedArray = array.splice();

	//start from the end of the array and push each value into the reversedArray
	var traverse = function(value,index){
		reversedArray.push(value);

		if (index === 0){
			return;
		}

		traverse(array[index-1],index-1);

	}
	
	traverse(array[array.length-1],array.length-1);


	return reversedArray;
}