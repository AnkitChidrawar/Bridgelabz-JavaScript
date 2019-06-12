var insertionString=require(`./utility2`)  //call the utility class and store in variable
var readline=require('readline-sync')

console.log('Enter The String In Array:-')
   
var array1=readline.question();
var array=array1.toLowerCase().split(' ');//hear convert string into array when string are split
console.log(array);    //get user input


console.log('Sorted complited By Insertion Sort:-')
console.log(insertionString.functions.stringInsertionSort(array)) 