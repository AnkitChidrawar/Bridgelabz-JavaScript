/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node PrimeFact.js
 *  
 *  Purpose:      6. Factors
 *                   Desc -> Computes the prime factorization of N using brute force.
 *                   I/P -> Number to find the prime factors
 *                   Logic -> Traverse till i*i <= N instead of i <= N for efficiency​ .
 *                   O/P -> Print the prime factors of number N.            
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/
const readline = require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function f1(l)
{
    var i;
    if(l==0 && l==1)//here check  if 0&1 are i/p then invalid
    {
        console.log('invalid number')
    }
    else
    {
for(i=2;i*i<=l;i++)//this loop are use to get prime factor
{
    while(l%i==0)//here loop are use to get mod of input number equal to 0 
    {
        console.log(i);//print prime fact here
        l=l/i;
    }
}
console.log(l);
    }
}
rl.question('Enter a number',(l)=>{//get input from user
  
    f1(l);

});