'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
// this function move stack for start stack to the end stack
const movePiece = (start,end) => {
    
  let startPiece =  stacks[start].pop();

  stacks[end].push(startPiece);

  return startPiece;

}	
movePiece( "a","b")


const isLegal = (start, end) => {
  
  //The user will not be able to move stacks from an empty array
    if(stacks[end].length == 0){
  
      return true;
  // The user will not be able to put larger stack on top of the small one 
  
    } else if(stacks[start].slice(-1) < stacks[end].slice(-1)){
  
      return true;
  
    } else {
  
      return false;
    }


}

const checkForWin = () => {
//if there skacks.b or stacks.c is full the user won the game if not they lost
 
if(stacks.b.length == 4 || stacks.c.length == 4){
  return true
  console.log("you win")
}

else{
  return false
}

}
const towersOfHanoi = (start, end) => {
  if(isLegal(start,end) == true){
    movePiece(start, end);
  } else {
    console.log("illegal move ");
  }
  checkForWin();

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (start) => {
    rl.question('end stack: ', (end) => {
      towersOfHanoi(start, end);
      getPrompt();
    });
  });
}

getPrompt();


//test
if (typeof describe === 'function') {
  describe('#towersOfHanoi()', () => {	  describe('#towersOfHanoi()', () => {
    it('should be able to move a stack', () => {	    it('should be able to move a stack', () => {
      towersOfHanoi('a', 'b');	      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });	      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });	    });
  });	  });

 }
  