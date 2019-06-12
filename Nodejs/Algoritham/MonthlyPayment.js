/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node MonthlyPayment.js
 *  
 *  Purpose:       Write a Util Static Function to calculate ​ monthlyPayment that reads in three
 *                 command-line arguments P, Y, and R and calculates the monthly payments you
 *                 would have to make over Y years to pay off a P principal loan amount at R per cent
 *                 interest compounded monthly.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/
var pla=parseInt(process.argv[2])
var years=parseInt(process.argv[3])
var percentinter=parseInt(process.argv[4])
class MonthlyPayment
{
    
    static monthlyPayment(P,Y,R)
    {
        var r=R/(12*100)

       var n=12*Y

       var payment=P*r/(1-Math.pow(1+r,-n))
       console.log('Monthly Payment is:-',Math.round(payment))
    
    }
}

MonthlyPayment.monthlyPayment(pla,years,percentinter)
// console.log(DayOfWeak.dayOfWeak(m,d,y))