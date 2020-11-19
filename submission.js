const findSum = function(array) {
  // set the function that adds values
  const sumVar = (x, y) => x + y;

  // find average - doesn't ask for this to be returned
  const averageVar = sumVar / array.length;
  
  // apply with reduce method and return it
  return array.reduce(sumVar);
};

const findFrequency = function(array) {
    // set empty object to hold these
  let countEachObj = {};

  // loop through array and count instances
  array.forEach(x => {
    if (countEachObj[x]) {
      countEachObj[x] += 1;
    } else {
      countEachObj[x] = 1;
    }
  })

  // initialize max (assumes there will be at least one letter)
  let max = 0;
  let maxKey = '';

  // initialize min to be the first object item (to compare each other item against)
  let minKey = Object.keys(countEachObj)[0];
  let min = countEachObj[minKey];

  // see which is most or least
  for (let i in countEachObj) {
    if (countEachObj[i] > max) {
      max = countEachObj[i];
      maxKey = i;
    } else if (countEachObj[i] < min) {
      min = countEachObj[i];
      minKey = i;
    } else {
      // pass - we don't care
    }
  }

  // make the results pretty
  let resultObj = {};
  resultObj['most'] = maxKey;
  resultObj['least'] = minKey;

  return resultObj;
};

const isPalindrome = function(str) {
  // get the index of the last letter to compare vs letter with 0 index, and then subtract as iterate goes up
  let j = str.length - 1;
  
  // start off assuming str is a palindrome, easier to check if one letter diff than all letters are same
  let palindromeResult = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      palindromeResult = false;
    }
    j--; 
  }

  return palindromeResult;
};

const largestPair = function(array) {
  // set up local variables at 0
  let result = 0;
  let tempVal = 0;

  // loop through all but the last item in array
  for (let i = 0; i < array.length - 1; i++) {
    tempVal = array[i] * array[i + 1];
    
    // see if the product of these consecutive two entries are bigger than the previous, save it if so
    if (tempVal > result) {
      result = tempVal;
    }
  }

  return result;
};

const removeParenth = function(str) {
  return str.replace('(','').replace(')','');
};

const scoreScrabble = function(str) {
  let runningTotal = 0;

  // set up point arrays
  const onePoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  const twoPoints = ['d', 'g'];
  const threePoints = ['b', 'c', 'm', 'p'];
  const fourPoints = ['f', 'h', 'v', 'w', 'y'];
  const fivePoints = ['k'];
  const eightPoints = ['j', 'x'];
  const tenPoints =  ['q', 'z'];

  // iterate the string
  for (let i of str) {
    // see which array i is in and add that many points
    if (onePoint.includes(i)) {
      runningTotal += 1;
    } else if (twoPoints.includes(i)) {
      runningTotal += 2;
    } else if (threePoints.includes(i)) {
      runningTotal += 3;
    } else if (fourPoints.includes(i)) {
      runningTotal += 4;
    } else if (fivePoints.includes(i)) {
      runningTotal += 5;
    } else if (eightPoints.includes(i)) {
      runningTotal += 8;
    } else if (tenPoints.includes(i)) {
      runningTotal += 10;
    } else {
      console.log(`${i} not found in curren point system.`)
    }
  }

  return runningTotal;
};
