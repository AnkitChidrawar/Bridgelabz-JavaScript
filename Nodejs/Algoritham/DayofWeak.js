/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node DayofWeak.js
 *  
 *  Purpose:      To the Util Class add ​ dayOfWeek static function that takes a date as input and
 *                prints the day of the week that date falls on. Your program should take three
 *                command-line arguments: m (month), d (day), and y (year). For m use 1 for January,
 *                2 for February, and so forth. For output print 0 for Sunday, 1 for Monday, 2 for
 *                Tuesday, and so forth.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/



var d=parseInt(process.argv[2])
var m=parseInt(process.argv[3])
var y=parseInt(process.argv[4])
class DayOfWeak
{
    
    static dayOfWeak(d,m,y)
    {

// var m=argv[2]
// var d=argv[3]
// var y=argv[4]
// console.log(d)


y = y - (14 - m) / 12//year calculation

    // console.log(y)

    var x = y + y/4 - y/100 + y/400 //

    // console.log(x)

    m = m + 12 * ((14 - m) / 12) - 2

    //  console.log(m)


     d = (d + x + 31*m / 12) % 7
 d=Math.round(d)
    // console.log(d)

  

    switch (d)
    {
        case 0:
        console.log("Weak Of The Day Is:-");

        console.log("Sunday");
        break;
      case 1:
      console.log("Weak Of The Day Is:-");

        console.log("Monday");
        break;
      case 2:
      console.log("Weak Of The Day Is:-");

         console.log("Tuesday");
        break;
      case 3:
      console.log("Weak Of The Day Is:-");

        console.log("Wednesday");
        break;
      case 4:
      console.log("Weak Of The Day Is:-");

        console.log("Thursday");

        break;
      case 5:
      console.log("Weak Of The Day Is:-");

        console.log("Friday")
        break;
      case 6:
      console.log("Weak Of The Day Is:-");

        console.log("Saturday");
      default:
      //  console.log('By')
      break;
    }
}
}
DayOfWeak.dayOfWeak(d,m,y)
// console.log(DayOfWeak.dayOfWeak(m,d,y))