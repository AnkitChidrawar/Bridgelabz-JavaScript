
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node InputName.js
 *  
 *  Purpose:      1. User Input and Replace String Template “Hello <<UserName>>, How are you?”
 *                      a. I/P​ -> Take User Name as Input. ​ Ensure UserName has min 3 char
 *                      b. Logic​ -> Replace <<UserName>> with the proper name
 *                      c. O/P​ -> Print the String with User Name
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   31-05-2019
 *
 ******************************************************************************/
var an;
function Inputna(name)//function for calculate length of user name
{
  an=(name).length;
  return an;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Hello <<UserName>>! How are you`);
 
rl.question('Enter a Name:- ', (name) => {
    var an1=Inputna(name)//Pass name to function given by user
    if(an1>=3)//check UserName has minimum 3 char
    {
  console.log(`Hello ${name}! How are you`);//print statement
    }
  else
    {
        console.log(`Please enter minimum 3 character`);       
    }
  rl.close();

});

