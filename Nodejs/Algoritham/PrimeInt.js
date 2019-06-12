
/*****************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node PrimeInt.js
 *  
 *  Purpose: Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   3-06-2019
 *
 ******************************************************************************/
var prim=require(`./utility2`)//here include utility file

var readline=require('readline-sync');//here include readline-sync in readline
 var r2=readline.question('Enter a number:--');

console.log('Prime number are :-');
var start=Math.round(Date.now())
console.log(prim.functions.Prime(r2))//here pass the vale to prime function
var end=Math.round(Date.now())
console.log('Elapse Time:-'+(start-end))

// var prime= " ";
// var i=0;
// var num=0;
// for (i = 0; i <= r2; i++)  	   
// {
//   var counter=0; 		  
                    
//   if(i>1)
//   {
//    for(num =1; num<=i; num++)
//    {
//     if(i%num==0)
//       {
//         counter++;
//       }
//     }
//   }

//     if (counter ==2)
//   {
//   prime= prime + i + " ";
// }	
// }	  
// console.log('Prime number are :-',prime);




              

