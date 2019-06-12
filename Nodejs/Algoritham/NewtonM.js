/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node NewtonM.js
 *  
 *  Purpose:       Write a static function ​ sqrt t ​ o compute the square root of a nonnegative number c
 *                 given in the input using Newton's method
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   5-06-2019
 *
 ******************************************************************************/
var readline=require('readline-sync')
var input=readline.question('Enter Input:-')
class NewtonM
{
    static sqrt(c)
    {
        var epsilon = 1e-15;    // relative error tolerance
        var t = c;              // estimate of the square root of c

        // repeatedly apply Newton update step until desired precision is achieved
        while (Math.abs(t - c/t) > epsilon*t) 
        {
                 t = (c/t + t) / 2.0;
        } 
    console.log(t)
}
}

NewtonM.sqrt(input)

