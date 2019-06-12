
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node ToBinary.js
 *  
 *  Purpose:       Write a static function ​ toBinary that outputs the binary (base 2) representation of
 *                 the decimal number typed as the input. It is based on decomposing the number into
 *                 a sum of powers of 2. For example, the binary representation of 106 is 11010102,
 *                 Page 6 of 20which is the same as saying that 106 = 64 + 32 + 8 + 2. Ensure necessary padding
 *                 to represent 4 Byte String.
 *                  
 *                  
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   9-06-2019
 *
 ******************************************************************************/
w
var readline=require('readline-sync')
var num=readline.question('Enter Decimal Input:-')
function binaryConvert(num) {
    
    if (num < 0) {
      console.log("Please enter a number");
      
    } else if (num != Math.floor(num)) {
      console.log("Please enter a positive number");
    
    } else {
      var binary = parseInt(num, 10);
      console.log("Conversion From  Decimal To Binary:-\n ",binary.toString(2));
     var binary1=binary.toString(2)
      
    }
return binary1;
  }
//   binaryConvert(num);
  var r= binaryConvert(num);
// console.log(r)
  function decimal(num)
  {
    
      
    //   console.log(num.length-1)
      count=0;
      console.log('Below Numbers Total are EqualTo the Number:-' )
for(i=num.length-1;i>=0;i--)
{
//   console.log(count)
    if(num.charAt(i)==1)
    {
        var num1=Math.pow(2,count)

         console.log(num1)
       
    }
    else if(num.charAt(i)==0)
    {

    }
   count=count+1;
  }
  var dec = parseInt(num,2);  
   console.log('Convert From Binary To Decimal:-\n',dec)
}
  decimal(r)

