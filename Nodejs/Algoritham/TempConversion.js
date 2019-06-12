/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node TempConversion.js
 *  
 *  Purpose:      To the Util Class add ​ temperaturConversion static function, given the temperature
 *                in fahrenheit as input outputs the temperature in Celsius or viceversa using the
 *                formula
 *                  Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
 *                  Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   7-06-2019
 *
 ******************************************************************************/
    var choseO
    class TempConversion
    {
        static tempconversion(choseO)
        {
             do 
            {
                var readline=require('readline-sync')
                console.log('*************************************************')

                console.log('Chose option any one\N')
                console.log('1.Celsius to Fahrenheit Conversion')
                console.log('2.Fahrenheit to Celsius Conversion:')
                console.log('3.Exit:')

                 choseO=parseInt(readline.question());
        
                switch (choseO)
                {

                    case 1:
                    console.log('Enter the Temperature')
                    var c=parseInt(readline.question());
                    var celtoFah=(c *(9/5))+32; //calculation of Celsius to Fahrenheit
                    console.log('Celsius to Fahrenheit:--\n',celtoFah+'F')
                    break;
                    case 2:
                    console.log('Enter the Temperature')
                    var f=readline.question();
                    var fahtoCel=(f-32)*(5/9);
                    console.log('Fahrenheit To Celsius:--\n',fahtoCel+'C')//print
                    break;
                    case 3:
                    process.exit();
                    default:
                    console.log('Invalid Input Enter Please Enter 1 or 2')
                    break;
                 }
            } while (choseO!=-1);
        }
    }
console.log(TempConversion.tempconversion(choseO))//call static function & pass parameter by class name 