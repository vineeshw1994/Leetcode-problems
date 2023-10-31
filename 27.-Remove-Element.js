function removeElement(nums, val) {
    let count = 0; // Initialize a count to keep track of elements not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            
            nums[count] = nums[i];
            count++; // Increment the count
        }
    }

 
    return count;
}


const nums = [3, 2, 2, 3, 5, 6, 7, 3];
const val = 3;

const newLength = removeElement(nums, val);

console.log("New Length:", newLength); 
console.log("Modified Array:", nums.slice(0, newLength)); 
