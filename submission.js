const findSum = function(array) {
  // set the function that adds values
  const sumVar = (x, y) => x + y;

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
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
