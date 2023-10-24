
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
  
   
    strs.sort();
  
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
  
    let commonPrefix = "";
    const minLength = Math.min(firstStr.length, lastStr.length);
  
    for (let i = 0; i < minLength; i++) {
      if (firstStr[i] === lastStr[i]) {
        commonPrefix += firstStr[i];
      } else {
        break;
      }
    }
  
    return commonPrefix;
  }
  
  
  const stringArray = ["flower", "flour", "flow"];
  const commonPrefix = longestCommonPrefix(stringArray);
  console.log("Longest Common Prefix:", commonPrefix);
  