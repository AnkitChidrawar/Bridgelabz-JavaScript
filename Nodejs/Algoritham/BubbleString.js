var readline=require('readline-sync')
console.log('Enter a string')
var arr=readline.question()
var Updarr=arr.toLocaleLowerCase().split(" ")//convert string in lower case and split by space
var stringBsort=require(`./utility2`)
console.log(stringBsort.functions.sortString(Updarr))//return data with paramiter
// var i,j;

// // console.log(arr);
// for(i=0;i<Updarr.length;i++)
// {
//     var flag=0;
   
//     for(j=0;j<Updarr.length-1-i;j++)
//     {
//         if(Updarr[j]>Updarr[j+1])
//         {
//             var tem=Updarr[j];
//             Updarr[j]=Updarr[j+1];0.
//             Updarr[j+1]=tem;
//             flag=1;
//                }
//     }
//     if(flag===0)
//     {
//         break;
//     }
// }

// console.log(Updarr);


// for(i=0;i<k.length;i++)
// {
//     for(j=0;j<k.length-1-i;j++)
//     {
//         const buf1=Buffer(from(k[j]))    
//         const buf2=Buffer(from(k[j+1]))
//         const arr=[buf1,buf2]
//         if(arr.sort(Buffer.compare)>0)
//         {
//             var tem=k[j];
//             k[j]=k[j+1];
//             k[j+1]=tem;
            
//                }
//     }
  
// }
// for(i=0;i<k.length-1;i++)
// {
//     console.log(k[i]);
// }
// console.log(k);
