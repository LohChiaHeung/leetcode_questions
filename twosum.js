/*
Question 1:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    const map = new Map(); //stores number --> index
    //Map object can store collections of key-value pairs.

    for (let i = 0 ;  i < nums.length; i++){
        const needed = target - nums[i];

        //Check if we already saw the needed number
        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        //Store current number with its index
        map.set(nums[i],i);
    }
}

//Check Answer
console.log(twoSum([2,7,11,15], 9)); // [0,1] 

console.log(twoSum([3,2,4,6], 6)); // [1,2]

/*
Revision:
3 Ways:
1 - Brute Force : Check Every Pair. (Easy to understand, but too slow O(n^2))
2 - Hashing: Mapping, dict (Python), Hashmap (Java)
3 - Sort + 2 Pointers: Sort the array, Use Left & Right Pointers, Move Inward - Complex

map.set(key,value); - save something (key value pairs)
map.has(key);  - check if key exists? (true/false)
map.get(key); - get the value for that key

*/