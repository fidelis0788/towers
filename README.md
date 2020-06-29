# towers

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
1. I am using recursion to solve the tower of hanoi 
Recursion is calling the same action from that action. 

2. I will be using   a for beginning stack where i have all my discs
3. b for auxiliary stacks before moving to the c stack
4. c for the ending stack where all the discs will be placed c the game
5. disc for the number of disks i am starting with.

 from the beginning I have the function below :
 <function tower(disc, src, aux, end)
{

}

6. This is the skeleton of my  solution. i am  taking  the total discs number as an argument. Then I need to pass a, b  place, and the c to show the map which I will use to complete the job.

  I will  need to find a terminal state.  where I am  not going to call this function anymore.

7. IF disc is equal 1 it will be the terminal state because I can move one disc to  c  and I am done
 
move disk from a to c

 8. I will  divide the stack of discs in two parts. The largest disk (nth disc) is in one part and all other (n-1) disks are in the second part. Then I call the method two times for -(n-1).



 9. IF disk is equal 1, THEN
      move disc from a to c
   ELSE
      <tower(disc - 1, a, c, b)   // Step 1
      <move disk from a to c        // Step 2
      <tower(disk - 1, b, a, c)   // Step 3
10. the expected output will be 
a to b
a to c
b to c
a to b
c to a
c to b
a to b
a to c
b to c
b to a
c to a
b to c
a to b
a to c
b to c
11. check win: using if statement I will be able to check for win as follows:

if stacks.a.length and stacks.b.length are equal to 0 : you win the game

12. Illegal move
