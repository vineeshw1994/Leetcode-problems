function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let uniqueCount = 1; // Initialize with 1 because the first element is always unique.

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueCount] = nums[i];
            uniqueCount++;
        }
    }

    return uniqueCount;
}

// Example usage:
const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const uniqueCount = removeDuplicates(nums);

console.log("Unique elements:", nums.slice(0, uniqueCount)); // [1, 2, 3, 4, 5]
console.log("Number of unique elements:", uniqueCount); // 5
