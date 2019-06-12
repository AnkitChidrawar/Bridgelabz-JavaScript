/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node AnagramString.js
 *  
 *  Purpose:      One string is an anagram of another if the second is simply a
 *                rearrangement of the first. 
 *                For example, 'heart' and 'earth' are anagrams...
 *                I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
 * 
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   3-06-2019
 *
 ******************************************************************************/
var readline=require('readline-sync');
/**here get two input**/
var num1=readline.question('Enter 1st number:--');
var num2=readline.question('Enter 2nd number:--');

   var arr1 = Array(num1).toString().split('').sort();//
   console.log(num1);
   
   var arr2 = Array(num2).toString().split('').sort();
   console.log(num2);
   
   for(var i=0;i<=arr1.length-1;i++)
   {
        var flag=false;
        if(arr1.length==arr2.length)
        {
       if(arr1[i] == arr2[i])
       {
           flag=true;
       }
       else
       {
           flag=false;
       }
    }
   }
   if(flag)
   {
      console.log("Given number  are anagrams");
   } 
   else 
   {
      console.log("Given number are not anagrams");
   }