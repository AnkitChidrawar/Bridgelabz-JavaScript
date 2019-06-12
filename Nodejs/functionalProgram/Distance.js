/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Distance.js
 *  
 *  Purpose:     Write a program Distance.java that takes two integer command-line arguments x and y 
 *               and prints the Euclidean distance from the point (x, y) to the origin (0, 0). 
 *               The formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   4-05-2019
 *
 ******************************************************************************/
var x=process.argv[2]//here get input from command line
var y=process.argv[3]
//calculate power of x&y
var xpow=Math.pow(x,x)
var ypow=Math.pow(y,y)
console.log('x power:-'+xpow)
console.log('y power:-'+ypow)
console.log('Euclidean Distance:-',Math.sqrt(xpow+ypow))//here calculet distance by using function sqrt 

