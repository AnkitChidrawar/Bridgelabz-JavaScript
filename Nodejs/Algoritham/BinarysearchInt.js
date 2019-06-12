var readline=require('readline-sync')
var srchI=readline.question('Enter a number:-')
var array=[10,20,30,12,15,28,1,7];
var lowI=0;
var highI=array.length-1;
var mid=Math.floor(highI-lowI)/2;       //by this formula get middle index
var intBsort=require(`./utility2`)      //here include utility file by require function
console.log('************Before Sorting***********')
console.log(array)
console.log('************After Bubble Sorting************')

console.log(intBsort.functions.SortInt(array))      //pass parameter with return type to Bubble sort function
var sortArray=intBsort.functions.SortInt(array)     //pass parameter with return type to Bubble sort function and store in variable

while(lowI<=highI)
{
    /*here loop use to iterate loop whenever low index is less than or 
    equal to high index */

    mid=Math.floor(highI-lowI/2)    //here find middle value

    if(parseInt(sortArray[mid])==srchI)     //here check search value are equal to middle
    {
        console.log('Item is '+mid+' index position ');
        break;  //break statement
    }
    else if(parseInt(sortArray[mid])<srchI)     //this condition is check left side of middle index 
    
    {
        lowI=mid+1; //here lower index of array change
    }
    else
    {
        highI=mid-1;     //here hiher index of array change
    }
    mid=Math.floor(highI-lowI/2)    //again find middle index calculate
    
}
 if(lowI>highI)
 {
     console.log('Item are not found');
 }