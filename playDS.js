/* Time complexity - Big 0 */
// Liner time
const sumUpLinearTimeComplexity = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
};
let start = 0;
let end = 0;

console.log(sumUpLinearTimeComplexity(3));

//start = performance.now();
let time = end - start;
console.log('time: ', time);

const sumUpConstantTime = (n) => {
  return (n / 2) * (1 + n);
};

//console.log(sumUpConstantTime(3));

const sumNumbersOfArray = (numbers) => {
  let result = 0;
  for (const n of numbers) {
    result += n;
  }
  return result;
};

//console.log(sumNumbersOfArray([1,5,6]));

const sumNumbersOfArrayReduce = (numbers) => {
  return numbers.reduce((sum, currNum) => sum + currNum, 0);
};

//console.log(sumNumbersOfArray([1,5,6]));

const twoDarray = [
  [5, 5, 1],
  [12, 27, 19, 26],
  [32, 32, 36, 39],
  [1000, 10001, 99, 16],
];

function largestOfFour(arr) {
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let currentElement = arr[i][j];
      if (currentElement >= tempMax) {
        tempMax = currentElement;
      }
    }
    max.push(tempMax);
  }
  return max;
}

console.log(largestOfFour(twoDarray));

//Reverse a String

const reverseString = (str) => {
  const strArray = str.split("");
  const reverseStringArray = strArray.reverse();
  const reversedString = reverseStringArray.join("");
  return reversedString;

  //secondWayOfDoing return str.split("").reverse().join("");
};

console.log(reverseString("ashika"));

let addStartAndEnd = [12, 45, 546, 54];

addStartAndEnd = ["Start", ...addStartAndEnd, "end"];
console.log(addStartAndEnd);

const sackObj = [
  { id: "a", val: 10, W: 3 },
  { id: "b", val: 6, W: 8 },
  { id: "c", val: 3, W: 3 },
];
//result = [{id:"a", val:10},{id:"c", val:3}]
const iteamFinder = (iteamsForSack) => {
  let sack = [];
  for (i = 0; i < iteamsForSack.length; i++) {
    let currentItem = iteamsForSack[i];
    if (currentItem.W < 8) {
      sack.push({id:currentItem.id, val:currentItem.val });
    }
  }
  return sack;
};
console.log("The hightest value ", iteamFinder(sackObj));

//coin optimazation problem & knapsack (dynamic programming)
const person = {name:"John", surName: ""}


const foo = () => {
    return 1
}

const bar = foo()

console.log(bar)

const a = () => {
    let a = 0
    const b = () => {
        a = 2
        return a
    }
    return b()

}
console.log(a());

const sampleObj = [
    { id: "a", val: 10, W: 3 },
    { id: "b", val: 6, W: 8 },
    { id: "c", val: 3, W: 3 },
    {key: 123}
  ];

 //[{}] vs [[],[],[]]
 sampleObj[3].key
 console.log('The key of the object',  sampleObj[3].key);

module.exports = reverseString