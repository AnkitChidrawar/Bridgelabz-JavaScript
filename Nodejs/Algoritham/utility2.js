/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node AnagramString.js
 *  
 *  Purpose:      Create Utility Class having following static methods

                    binarySearch method for integer
                    binarySearch method for String
                    insertionSort method for integer
                    insertionSort method for String
                    bubbleSort method for integer
                    bubbleSort method for String
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   8-06-2019
 *
 ******************************************************************************/
exports.functions =
{
    /**********************Prime number function ***********************/
Prime:function (r2)
{
    var arr=[]      //array declaration
    //var prime= "";                                               
    var i=0;
    var num=0;
    var j=0;
    for (i = 0; i <= r2; i++) //outer loop 
    {
    var counter=0; 		                    
      if(i>1)
      {
       for(num =1; num<=i; num++)//inner loop
       {
        if(i%num==0)//condition is use to check mod is equalto 0  
          {
            counter++;//counter increament
          }
       }
      }
        if (counter ==2)//condition are use to check count equalto 2 
        {
         arr[j]=i;
         j++;  //j increament 
        }	                         
      }
    return arr; //array return to function
},


/**********************Plindrom for Number *********************/
Palindrm:function (no)
{
    var reverse=0;
    var sm=0;
    var temp;
    temp=no;


    while(no>0)//This loop is use for to check palindrome number
    {    
            reverse=no%10;  //get reminder 
            sm=(sm*10)+reverse;    
            no=Math.floor(no/10);    //get division
    }  
    //    console.log('Below Are Prime + Palindrome')
        if(temp==sm) //condition is use to check palindrome or not
            {
                  console.log(sm)  
            } 
    //    else
    //    {
    //        console.log('Number is not a Palindrome')
    //        console.log(temp) 
    //     }
// 
// return sm,temp;
},



/************** Anagram for String*************/
Anagram:function(str1,str2)
    {
        /*Below taking a tow array & sort them by function*/
        var arr1 = Array.from(str1).sort();
        console.log(arr1);
        
        var arr2 = Array.from(str2).sort();
        console.log(arr2);
           for(var i=0;i<=arr1.length-1;i++)//this loop are use to looping the array at the end of array length-1 
           {
            var flag=false;
             if(arr1.length==arr2.length)//here is check both array length is same or not
                {
                    if(arr1[i] === arr2[i])//here is check array elements are same or not
                    {
                   flag=true;
                    }
                    else
                    {
                   flag=false;
                    }
                }
                if(flag)//here check flag are true or false
                {
                    console.log("Given strings are anagrams");
                } 
                else 
                {
                    console.log("Given strings are not anagrams");
                }
        
            }
    // return arr1,arr2;
        },



    /**********************Anagram for Integer***************************/
  
  
    AnagramInt:function(num1)
   {
       console.log(num1.toString())     //here print prime numbers
    for(var i=0;i<num1.length;i++)      //this loop are use for taking array of i possision
    {
        var arr1 = num1[i].toString().split('').sort();     //here array of ith number convert in string then split,sort and store in variable.
        for(var j=i+1;j<num1.length;j++)        //this is inner loop are takin i+1 possision
        {
            var arr2 = num1[j].toString().split('').sort();     //here array of ith number convert in string then split,sort and store in variable.
        
        var arr11=arr1.toString()   //here arr1 is convert in string and store in variable
        var arr22=arr2.toString()   //here arr2 is convert in string and store in variable
        if(arr11 == arr22)  //here check arr11 are equal of arr22 
        {
            console.log(num1[j]+'=='+num1[i]+' both are anagram');
        }   
     }
    }
   },



   /******************Bubble sort for Number ******************/
SortInt:function(array)
{
var i;
var j;
for(i=0;i<array.length;i++)     //this loop are iterate at array length
{                          //outer loop
    var flag=0;
   
    for(j=0;j<array.length-1-i;j++)     //inner loop 
    {
        if(parseInt(array[j])>parseInt(array[j+1]))
        /**this condition are check array of j possision element are greater than 
           array of j+1 element */ 
       
           {
                /**array element swap here */
            var tem=array[j];
            array[j]=array[j+1];
            array[j+1]=tem;
            flag=1;
        }
    }
    if(flag===0)    //here check flag equals to 0
    {
        break;  //break if condition
    }
}
// for(i=0;i<array.length-1;i++)
// {
//     console.log(array[i]);
// }
  // console.log(array);
return array;
},



/***********************Bubble sort for String*********************/
sortString:function(array)
{                          
  var i,j;

  for(i=0;i<array.length;i++)       //this loop are iterate at array length
  {                          //outer loop
      var flag=0;
     
      for(j=0;j<array.length-1-i;j++)   //inner loop 
      {
           /**this condition are check array of j possision element are greater than 
                array of j+1 element */ 

          if(array[j]>array[j+1])
          {
             
                /**array element swap here */
              var tem=array[j];
              array[j]=array[j+1];0.
              array[j+1]=tem;
              flag=1;
                 }
      }
      if(flag===0)  //here check flag equals to 0
      {
          break;    //break if condition
      }
  }
  console.log(array);
  return array;

},



/********************Binary search function for integer**********************/
 

intBinarySearch:function(array,srchI)
 {
  var sortArray=array.split(" ").sort() 
  var lowI=0;
  var highI=array.length-1;
  var mid=Math.floor(highI-lowI)/2;
  while(lowI<=highI)
  {
      /*here loop use to iterate loop whenever low index is less than or 
        equal to high index */
        
        mid=Math.floor(highI-lowI/2)    //here find middle value
  
      if(parseInt(sortArray[mid])==srchI)   //here check search value are equal to middle
      {
          
          console.log('Item is '+mid+' index position ');
          break;
      }
      else if(parseInt(sortArray[mid])<srchI)   //this condition is check left side of middle index 
      {
          lowI=mid+1;   //here lower index of array change
      }
      else
      { //here hiher index of array change
          highI=mid-1;
      }
      mid=Math.floor(highI-lowI/2)  //again find middle index calculate
      
  }
   if(lowI>highI)
   {
       console.log('Item are not found');   //lower index are smaller than higher index the execute this condition
   }
   return mid;  //return middle value to function
 },



 /*********************Binary serach function for string*****************/
strBinarySrch:function(arr,srchS)
{
  var lowI=0;
  var highI=arr.length-1;
  var mid=Math.floor(highI-lowI)/2;
  
  /*calculate middle and store in mid variable */
  // var k=arr.split(' ').sort();
  
  var foundStr='';
  console.log(arr)
  
  while(lowI<=highI)    //Loop are use to check lowI are smaller than or equal to highI 
  {
      mid=Math.floor(highI-lowI/2)  //again mid calculate and store in mid. when lowi is less than or equal to high
  
      if(arr[mid]==srchS)   //this condition is check array of middle element is equal to the search element. 
      {
           foundStr=console.log('Item is '+mid+' index position ');
           break;
      }
      else if(arr[mid]<srchS)   //if previous condition is false then this condition are execute
      
      /*lower index of array is change */
      
      {
          lowI=mid+1;
      }
      else
      {
          highI=mid-1;  //if previous condition false then higher index of array is change
      }
      mid=Math.floor(highI-lowI/2)  //again middle element calculate
      
  }
   if(lowI>highI)   //lower index of array is less than higher index of array 
   {
     foundStr=console.log('Item are not found');
   }
   return foundStr;
  //  return mid;

},



/***************Insertion sort for Integer*************/

intInsertionSort:function(arr,size)
{
   for(i=1;i<size;i++)  //outer loop
   {
       temp=arr[i];
       k=i
       while(k>0 && arr[k-1]>temp) 
       {
           arr[k]=arr[k-1]
           k=k-1;
       }
       arr[k]=temp; 
       
   }
return arr;
},


/**************Insertion Sort For String***********/
stringInsertionSort:function(arr)
{
  var i;
   for(i=1;i<arr.length;i++)
   {
       temp=arr[i];
       k=i
       while(k>0 && arr[k-1]>temp)
       {
           arr[k]=arr[k-1]
           k=k-1;
       }
       arr[k]=temp; 
       
   }
return arr;
}
};

