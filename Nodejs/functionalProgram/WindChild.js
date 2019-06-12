/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node WindChild.js
 *  
 *  Purpose:    Write a program ​ WindChill.java that takes two double command-line arguments t
 *              and v and prints the wind chill. Use Math.pow(a, b) to compute ab.
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   6-06-2019
 *
 ******************************************************************************/
var t=process.argv[2];
var v=process.argv[3];
var c=Math.pow(v,0.16);                     
//console.log(c);
console.log( 'Temperature:---',+t+'F')
console.log( 'Speed:-----',+v+'mph')
var w=0;
if(t<50)
{
    if(v>120 || v<3)
    {
        w=35.74+0.6215*t+(42.75*t-35.75)*c
        console.log(w);
    }
    else
    {
        console.log('please enter the temparature more than 50 & enter wind speed below 3 ')
    }
   
}

