# towers
  1. FUNCTION MOVEPIECE
   The first thing I will write a function to move stack from start stack to the end stack
   I will use .pop() method to remove the last element from my start stack and returns that element so that I can put the returned element into an end stack using .push() method

  2. I will nedd another function that detect the illegal moves 
     Illegal Moves - Prevents larger blocks from stacking on smaller blocks and also prevent the user from moving stacks from an empty array
      1. prevent the user from moving stacks from an empty array
     using if statement I will state: if  the length of stack[end] is equal to 0 it means the stack[start] is not equal to 0 so the user can  move stack from start to end because start is not empty
      2. Prevents larger blocks from stacking on smaller blocks
using .slice(-1) method I can acces the position of element in start stack -1 and the position of elememnt in the end stack -1 and then compare the positions, if position -1 at start stack is greater than postion -1 at end stack return true else return false

3. function the check and notify the winner: using if statmenet I will check if the user has successifully moved the all stacks from start to the end by checking the length of the end stack which can be  a or b , so if the length of  end stack  is equal to 4 return true else return false
and the console.log('you won ').

 4. the fist test will be to check if the user can move the stacks
    the second will be to check if illegal move function works
    the third test will be checking if the function checkWin works
