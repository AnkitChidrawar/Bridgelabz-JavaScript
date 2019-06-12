/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node FilelistBinay.js
 *  
 *  Purpose:       Read in a list of words from File. Then prompt the user to enter a word to
 *                 search the list. The program reports if the search word is found in the list.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/
var fs = require('fs');
var srchvalue=''

    var data = fs.readFileSync('hi.txt', 'utf8');
    console.log(data);  
     var catchh=data.split(",")
    var i;
    var stringBsort=require(`./utility2`)
    var arR=stringBsort.functions.sortString(catchh)//array pass to bubble sort
     const prompts = require('prompts');
 
     (async () => {
       const response = await prompts({
         type: 'text',
         name: 'meaning',
         message: 'Enter search name\n',
        
       });
      //  console.log(response.meaning)
       srchvalue=response.meaning
    //  console.log(srchvalue)
      //  for(i=0;i<catchh.length;i++)
      //  {
      //      if(catchh[i]===value)
      //      {
      //          console.log('Name are present in List')
      //          break;
      //      }
         
      //  }
      //  if(catchh[i]!=value)
      //  {
      //  console.log('Name are not present in list')
      //  }
      // console.log(stringBsort.functions.strBinarySrch(arR,srchvalue))//sorted array&srchkey pass to strBinarySrch
    
      var s=stringBsort.functions.strBinarySrch(arR,srchvalue)
      // console.log(s)
     })();

    
  
   