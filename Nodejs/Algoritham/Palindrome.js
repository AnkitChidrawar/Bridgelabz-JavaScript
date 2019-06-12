var pld=require(`./utility`)
var readline=require('readline-sync');
 var p=readline.question('Enter a number:--');
console.log('Palindrome numbers are :-');
console.log(pld.functions.Palindrm(p))