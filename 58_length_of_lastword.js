function lengthOfLastWord(s) {
   
    s = s.trim();

    
    const words = s.split(" ");


    if (words.length === 0) {
        return 0;
    }

    
    const lastWord = words[words.length - 1];
    return lastWord.length;
}


const inputString = "Hello World";
const length = lengthOfLastWord(inputString);
console.log(length); 
