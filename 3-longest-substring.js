const  lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
 let left = 0;
 const charMap = {};

 for (let right = 0; right < s.length; right++) {
   const currentChar = s[right];

   if (charMap[currentChar] !== undefined && charMap[currentChar] >= left) {
    
     left = charMap[currentChar] + 1;
   }

   charMap[currentChar] = right; 
   const currentLength = right - left + 1; 

   
   maxLength = Math.max(maxLength, currentLength);
 }

 return maxLength;
};

const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(result);