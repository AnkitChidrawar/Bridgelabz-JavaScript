/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node ThreeIntAdd.js
 *  
 *  Purpose:    A program with cubic running time. Read in N integers and counts the
 *              number of triples that sum to exactly 0.
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   7-06-2019
 *
 ******************************************************************************/
var readline=require('readline-sync')
console.log('Enter Number Of Input')
var n=readline.question()
var arr=new Array(n)
let count=0;
var i;

for(i=0;i<n;i++)//This for loop for insert user input in array
{
    arr[i]=parseInt(readline.question())
}
console.log(arr)
/* Below for loops are use to get number from array  through there posision  */
for(i=0;i<arr.length-2;i++)
{
    for(j=i+1;j<arr.length-1;j++)
    {
        for(k=j+1;k<arr.length;k++)
        {
            var r=arr[i]+arr[j]+arr[k]//here addition is done arrays possision value
             console.log(r)
            if(r==0)//this condition check addition are equal or not
            {
                // console.log(r)
                count=count+1;//count increment 
                console.log(arr[i]+'+'+arr[j]+'+'+arr[k]+'='+r)
            }
        }
    }
}
console.log('Total count',+count)







