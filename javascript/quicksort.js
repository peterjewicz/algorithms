//Quicksort implementation in javascript


var arrayToSort=[5,12,1,8,19,3,10,4,7,2,56,43,87,0,15,11,99,21,44,9,88,121,254,233]
function quicksort(array, start, end)
{	

	if (end - start < 2){return;}
	var pivot = array[end - 1];
	var lowerBound = start;
	var upperBound = end -1;

	var tempVal = 0;


	while(lowerBound < upperBound)
	{
		while(array[lowerBound] < pivot)
		{
			lowerBound++;
		}
		while(array[upperBound] > pivot)
		{
			upperBound--;
		}
		tempVal = array[lowerBound];
		array[lowerBound] = array[upperBound];
		array[upperBound] = tempVal;
	}
	pivotIndex = lowerBound;


	quicksort(array,0, lowerBound);

	quicksort(array, upperBound + 1, end);

	return array;
}


array = quicksort(arrayToSort,0, arrayToSort.length);
alert(array);


