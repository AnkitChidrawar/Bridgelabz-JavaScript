exports.functions =
{
Prime:function (r1)
{
    var prime= " ";
    var i=0;
    var num=0;
    for (i = 0; i <= r1; i++)  	   
    {
      var counter=0; 		  
                        
      if(i>1)
      {
       for(num =1; num<=i; num++)
       {
        if(i%num==0)
          {
            counter++;
          }
        }
      }
    
        if (counter ==2)
       {
         prime= prime + i + " ";
        // primearr[i]=prime;
       }	
    }	  
    console.log(prime);
    return prime;
},
Palindrm:function (no)
{
// var no=123
var reverse=0;
var sm=0;
var temp;
temp=no;
while(no>0){    
    reverse=no%10;  //get reminder 
    sm=(sm*10)+reverse;    
    no=Math.floor(no/10);    //get div
   }  
   if(temp==sm) 
   {
      console.log('Number is Palindrome') 
      return temps;

   } 
   else
   {
      
       console.log('Number is not a Palindrome')
       return temp;
   }
   //return temp;
},
    Anagram:function(str1,str2)
    {
        var arr1 = Array.from(str1).sort();
        console.log(arr1);
        
        var arr2 = Array.from(str2).sort();
        console.log(arr2);
        
        for(var i=0;i<=arr1.length-1;i++)
        {
             var flag=false;
            if(arr1[i] === arr2[i])
            {
                flag=true;
            }
            else
            {
                flag=false;
            }
        }
        if(flag)
        {
           console.log("Given strings are anagrams");
        } 
        else 
        {
           console.log("Given strings are not anagrams");
        }
     return flag;
    }

};

