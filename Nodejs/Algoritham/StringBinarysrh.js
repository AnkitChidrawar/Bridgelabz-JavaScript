var readline=require('readline-sync')
var strng=readline.question('ENTER A STRING\n')
var srchI=readline.question('SERCH KEY ENTER:-\n')
var arr=strng.toLowerCase().split(" ")

var lowI=0;
var highI=arr.length-1;
var mid=Math.floor(highI-lowI)/2;

function Sort1(array)
{
var i;
var j;
for(i=0;i<array.length;i++)
{
    var flag=0;
   
    for(j=0;j<array.length-1-i;j++)
    {
        if(array[j]>array[j+1])
        {
            var tem=array[j];
            array[j]=array[j+1];
            array[j+1]=tem;
            flag=1;
               }
    }
    if(flag===0)
    {
        break;
    }
}
return array;
}
var array2=Sort1(arr)

console.log(array2);

while(lowI<=highI)
{
    mid=Math.floor(highI-lowI/2)

    if(array2[mid]==srchI)
    {
        console.log('Item is '+mid+' index position ');
        break;
    }
    else if(array2[mid]<srchI)
    {
        lowI=mid+1;
    }
    else
    {
        highI=mid-1;
    }
    mid=Math.floor(highI-lowI/2)
    
}
 if(lowI>highI)
 {
     console.log('Item are not found');
 }