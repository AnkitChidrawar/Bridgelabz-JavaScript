/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Flip.js
 *  
 *  Purpose:     Write a Stopwatch Program for measuring the time that elapses between
 *               the start and end clicks
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   2-06-2019
 *
 ******************************************************************************/
var start=Math.round(Date.now())//Date.now() method returns the number of milliseconds
console.log('Start Time:-'+start)//print start time
var end=Math.round(Date.now())
console.log('End Time:-'+end)
var ElapseTime=start-end//here calculate elapse time
console.log('Elapse Time:-'+ElapseTime)
