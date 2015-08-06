
function findPrime(n)
{
	var checkUntil = Math.round(Math.sqrt(n)); //Only check up to square root of N
	var primeArray = [];

	for(x=0; x<=n; x++)
	{
		primeArray[x]=x;
	}

	primeArray.splice(0,2) //remove 0 and 1;
	var arraySize = primeArray.length;

	for(x=0;x<=checkUntil; x++) //go through each element of the array
	{
		var currentVal = primeArray[x];
		for(i=x+1; i<=arraySize; i++) //check each element against current element if divisilbe
		{
			if(primeArray[i] % currentVal ==0)
			{
				primeArray.splice(i, 1);
			}
		}
	}

	return primeArray;

}


array = findPrime(1000);
console.log(array);



