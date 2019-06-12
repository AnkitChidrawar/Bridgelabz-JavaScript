/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node DstCupnNum.js
 *  
 *  Purpose:      Given N distinct Coupon Numbers, how many random numbers do you
 *                need to generate distinct coupon number? This program simulates 
 *                this random process.
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/
class random
{
    static Cupan_number()
    {
        var dstRdm=[]
        var count=0;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          }); //take input by user       
          rl.question('Enter a number',(rt) => {
        
        for(var i=0;i<=rt-1;i++)//outer loop iterate upto given number -1.
        {
            function getRandomInt(min, max) {
                /**this function is use to genrated randome number btwn given by range u want **/
            
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; 

              }
        
                dstRdm[i]=getRandomInt(0,rt);//radome number are store in array by index possision   
                count=count+1;
           
            }
            console.log(dstRdm)
               var uSet = new Set(dstRdm);//here Set is use to find unique element from array
        
               console.log('Number of count for find distinct number:-',count)
              console.log('Distinct Cupan Number are:-',[...uSet]);

        });
    }
}
random.Cupan_number()//call function
