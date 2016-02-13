
function diff(arr1, arr2)
{
    var newArr = [];
    var arr1Filter = [];
    var arr2Filter = [];

    arr1Filter = arr1.filter(function(value)
    {
     if(arr2.indexOf(value) != -1)
      {
       return false;
      }
      else
      {
       return true;
      }
   });

   arr2Filter = arr2.filter(function(value)
   {
     if(arr1.indexOf(value) != -1)
      {
       return false;
      }
      else
      {
       return true;
      }
   });

   newArr = arr1Filter.concat(arr2Filter);

   return newArr;
}
