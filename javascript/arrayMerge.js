
function mergeArray(arr1, arr2)
{
	if(arr1.length == 0){return arr2;}
	if(arr2.length == 0){return arr1;}

	var arr3 =[];
	var x = 0; //arr 1
	var y =0; //arr 2
	var k=0; //return array

	while(x < arr1.length && y < arr2.length)
	{
		if(arr1[x] == arr2[y])
		{
			arr3[k] = arr1[x];
			k++;
			arr3[k] = arr2[y];
			x++;
			y++;
		}

		else if(arr1[x] < arr2[y])
		{
			arr3[k] = arr1[x];
			x++;
		}
		else
		{
			arr3[k] = arr2[y];
			y++;
		}

		k++;
	}

	while(x < arr1.length)
	{
		arr3[k] = arr1[x];
		x++;
		k++;
	}

	while(y < arr2.length)
	{
		arr3[k] = arr2[y];
		y++;
		k++;
	}


	return arr3;
}
