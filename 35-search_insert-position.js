function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left; // 'left' will be the index where 'target' should be inserted
}

const nums = [1, 3, 5, 6];
const target = 5;

const index = searchInsert(nums, target);
console.log(index); // Output: 2
