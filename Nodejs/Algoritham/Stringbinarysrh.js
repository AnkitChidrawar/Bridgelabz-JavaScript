var readline=require('readline-sync')
console.log('Enter a string')
var arr=readline.question()
var lowI=0;
var highI=arr.length-1;
var mid=Math.floor(highI-lowI)/2;
var srchI=readline.question('SERCH KEY ENTER:-\n')


var k=arr.toLowerCase().split(' ').sort();
console.log(k)



while(lowI<=highI)
{
    mid=Math.floor(highI-lowI/2)

    if(k[mid]==srchI)
    {
        console.log('Item is '+mid+' index position ');
        break;
    }
    else if(k[mid]<srchI)
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