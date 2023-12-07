function isHappy(n) {
 
  function calculateSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  
  const seenNumbers = new Set();

  while (n !== 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = calculateSumOfSquares(n);
  }

  
  return n === 1;
}


console.log(isHappy(19)); 
console.log(isHappy(4));  
