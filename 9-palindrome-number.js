const isPalindrome = function(x) {
    if (x < 0) {
    return false;
};

 const xStr = x.toString();
  const reversedStr = xStr.split('').reverse().join('');

  return xStr === reversedStr;
}

const num1 = 121;
console.log(isPalindrome(num1));

const num2 = 12121;
console.log(isPalindrome(num2)); 

const num3 = 10;
console.log(isPalindrome(num3)); 