/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Array2D.js
 *  
 *  Purpose:      A library for reading in 2D arrays of integers, doubles, or booleans from
                  standard input and printing them out to standard output.
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   05-06-2019
 *
 ******************************************************************************/
var readline=require('readline-sync')
console.log('Enter row')
var row=readline.question()
console.log('Enter col')
var col=readline.question()
var arr=new Array(row)
for(i=0;i<row;i++)//this loop are use for include value on array index 
{
arr[i]=new Array(row)//here a
}
for(i=0;i<row;i++)//outer loop for row
{
    for(j=0;j<col;j++)//inner loop for column
    {
        var val=readline.question('Enter value ')
        console.log(arr[i][j]=val)//here print row&col 

    }
}
console.log(arr)

