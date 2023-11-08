function addBinary(a, b) {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }

    return result;
}


const a = "1010";
const b = "1011";
const sum = addBinary(a, b);
console.log(sum); // Output: "10101"
