/*
	Swap all elements in pairs. If the length of the list is odd, the last element stays in place.
	[2,7,8,3,1,4]
	Returns [7,2,3,8,4,1]
	[3,6,8,1,5]
	Returns [6,3,1,8,5]
*/

var swapInPairs = function(array){
	var swappedArray = array.slice();

	var swap = function(val1,val2,index){

		//check if more fun is to be had
		
		if (index+1 >= swappedArray.length){
			return;
		}
		//perform swap
		var temp = swappedArray[index];
		swappedArray[index] = swappedArray[index+1];
		swappedArray[index+1] = temp;

		//if so swap next values in array
		index = index + 2;
		swap(swappedArray[index],swappedArray[index+1],index);
		
	}

	swap(swappedArray[0],swappedArray[1],0);

	return swappedArray;
}