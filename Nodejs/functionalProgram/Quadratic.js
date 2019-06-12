/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Quadratic.js
 *  
 *  Purpose:     Write a program ​ Quadratic.java to find the roots of the equation a*x*x + b*x + c.
                 Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation
                 can be found using a formula.            

 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   5-06-2019
 *
 ******************************************************************************/
var readline=require('readline-sync')
var a=readline.question('Ente  A :-')
var b=readline.question('Enter B :-')
var c=readline.question('Enter c :-')

    var delta = b*b - (4*a*c)//
    console.log('Delta'+delta)
    var x1 =(-b + Math.sqrt(delta))/(2*a)//1st root find here
    console.log(x1)
    var x2 = (-b - Math.sqrt(delta))/(2*a)//2nd root find here
    console.log(x2)
   
    
                        
