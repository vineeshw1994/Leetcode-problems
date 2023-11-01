function strStr(haystack, needle) {
   
    const index = haystack.indexOf(needle);

  
    return index;
}


const haystack = "Hello, this is a sample haystack string.";
const needle = "sample";

const index = strStr(haystack, needle);

if (index !== -1) {
    console.log(`Index of the first occurrence of '${needle}' in '${haystack}': ${index}`);
} else {
    console.log(`'${needle}' not found in '${haystack}'`);
}
