'use strict';
// used for testing
const assert = require('assert');
// used to read input from user
const readline = require('readline');
// setting up the readline settings
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// represent ythe entire toy
// the mnumber reopresent 
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
} 


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
// this function takes in the startstack name and endstack name and move the 
// top piece from the corresponding starting to the corresponding ending stack


const isLegal = (startStack,endStack) => {
 stacks.a.forEach(function(element,index){
    return (index,element)
  })
  stacks.b.forEach(function(element,index){
    return (index,element)
  })
stacks.c.forEach(function(element,index){
  return (index,element)
})

}

const checkForWin = () => {
 if(stacks.a.length == 0 && stacks.b.length == 0 ){
   console.log('you won the game')
 }
else{
  console.log("try again")
}

}
// const towersOfHanoi = (startStack, endStack) => {
  function tower(n, a, b, c){
    if (n  == 1){
      console.log(`${a} to ${c}`)
      return
      }
   else{
        tower(n - 1, a, c, b)
        
    console.log(`${a} to ${c}`)
    
      tower(n - 1, b, a, c)
      }
   
  }tower(4, "a", "b", "c")
  
const getPrompt = () => {
    //  fist thin it does is to printout the board
   
  printStacks(); 
  // it asks the user for the starting stack
  rl.question('start stack: ', (startStack) => {
    //   once the user enters the starting satck it asks for ending stack
    rl.question('end stack: ', (endStack) => {
        // once user enters the ending stack
        // it sends both input to a function called towerofhanoi()
      towersOfHanoi(startStack, endStack);
    //   once that function returns ,then call getprompt( over again)
      getPrompt();
    });
  });

}
getPrompt();
