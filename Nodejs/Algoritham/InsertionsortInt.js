var insertionInt=require(`./utility2`)  //call the utility class and store in variable
var readline=require('readline-sync')
console.log('Enter the Size of array:-')
var no=readline.question();     //get user input
var i;
var array=[];   //array declare
var temp;
for(i=0;i<no;i++)   //loop are use for geting a value from user
{                   
    console.log('Enter the number in array:-')
    array[i]=readline.question();   //hear store the value in array one by one
}
console.log('Sorted complited By Insertion Sort:-')
console.log(insertionInt.functions.intInsertionSort(array,no))//pass array and array size to insertion sort function 