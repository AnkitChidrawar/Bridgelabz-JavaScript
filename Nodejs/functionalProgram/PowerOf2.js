/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node PowerOf2.js
 *  
 *  Purpose:      Power of 2 
 *                   Desc -> This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
 *                   I/P -> The Power Value N. Only works if 0 <= N < 31 since 2^31 overflows an int
 *                   Logic -> repeat until i equals N.
 *                   O/P -> Print the year is a Leap Year or not.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   03-06-2019
 *
 ******************************************************************************/
var pow=process.argv[2];//take command line arghuument/input

console.log(process.argv);
var a=1;
power(pow)//Power function are use

function power(d1)//function are use to calculate power
{
 
    if(d1<31)//condition is use to check given number is less than 31
    {
        for(i=0;i<=d1;i++)//loop  
        {
        console.log(a);
        a =2*a;

        }
    }
    else
    {
        console.log('Please enter below 31')
    }

}



  