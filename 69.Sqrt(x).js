function mySqrt(x) {
    if (x <= 1) {
      return x;
    }
  
    let left = 1;
    let right = Math.floor(x / 2);
  
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  const x = 16; // Replace with your input
  const result = mySqrt(x);
  console.log(result);
  