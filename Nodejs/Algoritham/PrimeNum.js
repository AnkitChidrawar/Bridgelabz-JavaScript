

var readline=require('readline-sync');
var r1=readline.question('Enter a number:--');
var prime= " ";
var i=0;
var num=0;
for (i = 0; i <= r1; i++)  	   
{
  var counter=0; 		  
 		 		  
  if(i>1)
  {
   for(num =1; num<=i; num++)
   {
    if(i%num==0)
      {
        counter++;
      }
    }
  }

    if (counter ==2)
  {
  prime= prime + i + " ";
}	
}	
console.log('Prime numbers :-');
console.log(prime);
