/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node PrimeAnagram.js
 *  
 *  Purpose:      Extend the above program to find the prime numbers that are 
 *                Anagram.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   4-06-2019
 *
 ******************************************************************************/
var caller2 =require(`./utility2`)
var readline=require('readline-sync');
var array3;
var r3=readline.question('Enter a number:--');
array3=caller2.functions.Prime(r3)//pass input to prime function with return type with paramiter
 console.log(array3);
 console.log('****************Prime = Anagram*******************')
 caller2.functions.AnagramInt(array3)//pass prime input array to anagram 
                