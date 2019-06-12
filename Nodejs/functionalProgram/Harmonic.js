/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Harmonic.js
 *  
 *  Purpose:      Harmonic Number 
 *                  Desc -> Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N (http://users.encs.concordia.ca/~chvatal/notes/harmonic.html).
 *                  I/P -> The Harmonic Value N. Ensure N != 0
 *                  Logic -> compute 1/1 + 1/2 + 1/3 + ... + 1/N
 *                  O/P -> Print the Nth Harmonic Value.
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   03-06-2019
 *
 ******************************************************************************/
const readline = require('readline')
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var har=1;
function Harmo(k)
{  
if(k!=0)//condition check number is not 0
{
    for(i=2;i<=k;i++)//loop for calculation 
    {
        har=har+1/i;//calculate harmonic number 
    }
    return har;
    }

    }
        r.question('Enter n number:- ',(k)=>{//get input from user
        var k1=Harmo(k)//call harmonic function
        console.log(har);
    
    })