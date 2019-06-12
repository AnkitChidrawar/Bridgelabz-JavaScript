/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Flip.js
 *  
 *  Purpose:     Flip Coin and print percentage of Heads and Tails
 *                   I/P -> The number of times to Flip Coin. Ensure it is positive integer.
 *                   Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
 *                   O/P -> Percentage of Head vs Tails
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   1-06-2019
 *
 ******************************************************************************/
function flipht(flips)
{
  for(var i=1;i<=flips;i++)//this loop for get 
    {
        var random = Math.random(2);
        console.log(''+random)
       if(random>0.5)//condition check radome number is greater then increment head

       {
           Hd++;
       } 
       else//Else increment tail
       {
           Td++;
       }
       
    }
return Hd,Td;

}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var Hd=0;//head
var Td=0;//tail
rl.question('Enter a Number of flips:- ', (flips) => {//take input from user
  var num=flipht(flips);//call function
    
       var HdPer=Hd*100/flips;//Head percentage calculation
       var TdPer=Td*100/flips;//Tail percentage calculation
       console.log('Head percentage is:-'+HdPer);
       console.log('Tail Percentage is:-'+TdPer);
  rl.close();

});
