function pivotIndex(nums) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([2, 1, -1])); // Output: 0
