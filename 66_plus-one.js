function plusOne(digits) {
    const n = digits.length;

   
    for (let i = n - 1; i >= 0; i--) {
       
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
           
            digits[i] = 0;
        }
    }


    digits.unshift(1);

    return digits;
}

const digits = [9, 9, 9];
const result = plusOne(digits);
console.log(result); // Output: [1, 0, 0, 0]
