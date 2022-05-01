/*
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  
    let result = [],
        count = 1,
        starsNum = 1
    
    while (count <= nFloors) {
      let string = ' '.repeat(nFloors - count) + '*'.repeat(starsNum) + ' '.repeat(nFloors - count);
      result.push(string)
      count ++;
      starsNum += 2; 
    }
    return [...result]
  }