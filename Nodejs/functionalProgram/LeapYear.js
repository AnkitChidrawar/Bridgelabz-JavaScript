
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node LeapYear.js
 *  
 *  Purpose:      Leap Year
 *                   I/P -> Year, ensure it is a 4 digit number.
 *                   Logic -> Determine if it is a Leap Year.
 *                   O/P -> Print the year is a Leap Year or not.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   1-06-2019
 *
 ******************************************************************************/
function Lepyr(number)/**This function are use for convert number in to string */
{
    var k=number.toString();
    var an1=k.length;//length of k string
    return an1;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a Number:- ', (answer) => {//take a input
    var an=Lepyr(answer);
    if(an==4)//check number are equal
    {//outer if condition to check number is 4 digit
        if(answer%400==0)//check number is mod by 100 is equal to 0. 
        {//if true
            console.log(answer+'Is leap year')//then execte print statement
        }
        else if(answer%100==0)
        {//inner if condition
            console.log(answer+' is not a leap year')
        }
        else if(answer%4==0)
        {
            console.log(answer+' is a leap year')
        }
        else
        {
            console.log(answer+' is Not a leap year')
        }
    }
    else
    {//outer if condition false then execute
        console.log('Please enter a 4 digit number ')
    }

  rl.close();

});