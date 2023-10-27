
function isValid(s) {
    const stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };
  
    for (let char of s) {
      if (brackets[char]) {
        stack.push(char);
      } else {
        if (stack.length === 0 || brackets[stack.pop()] !== char) {
          return false; 
        }
      }
    }
  
    return stack.length === 0;
  }
  
  const inputString = "{[()]}"; 
  const isValidString = isValid(inputString);
  console.log(`Is the input string valid? ${isValidString}`);
  