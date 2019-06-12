var insertionInt=require(`./utility2`)//call the utility class and store in variable
var readline=require('readline-sync')
    console.log('Enter The String In Array:-')
    var array1=readline.question();
    var array=array1.toLowerCase().split(' ');//hear convert string into array when string are split
    // console.log(array);
//      function Insertion(arr)
//      {
//         for(i=1;i<arr.length;i++)
//         {
//             temp=arr[i];
//             k=i
//             while(k>0 && arr[k-1]>temp)
//             {
//                 arr[k]=arr[k-1]
//                 k=k-1;
//             }
//             arr[k]=temp; 
            
//         }
//    return arr;
//      }
    console.log('Sorted complited By Insertion Sort:-')

    console.log(insertionInt.functions.stringInsertionSort(array))
    
alist=array.join();
console.log('Array To list')
console.log(alist)

