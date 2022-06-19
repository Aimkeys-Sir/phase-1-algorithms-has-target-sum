function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;i<array.length;i++)
  {
    for(let j=i+1;j<array.length;j++)
    {
      //console.log(`${array[i]}+ ${array[j]}=${array[i]+array[j]}`)
      if(array[i]+array[j]==target)
      {
        return true
      }
    }
    
  }
return false

}
console.log(`it is ${hasTargetSum([22, 19, 4, 6, 30], 25)}`)
/* 
  Write the Big O time complexity of your function here
  how many times will the for loops run?
  for 3 numbers
  a+b
  a+c
  b+c ==3
  for 4 num
  a+e
  b+e
  c+e ==6
  for 5
  a+f
  b+f
  c+f
  e+f==10
so the formula
 input!/(input-2)!2!==> (input)Combination(2)

 O(nC2)
*/

/* 
  Add your pseudocode here
  3+8,
  3+12,
  3+4,
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
