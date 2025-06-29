# Four Sum

This project implements the `fourSum` function in JavaScript. It finds all unique quadruplets in an array that sum up to a specified target value.

##  Problem Description

Given an array of integers `nums` and an integer `target`, return all unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that all of the following are true:

- `a`, `b`, `c`, and `d` are distinct indices.
- `nums[a] + nums[b] + nums[c] + nums[d] === target`
- The quadruplet `[nums[a], nums[b], nums[c], nums[d]]` is not a duplicate of any other in the result set.

---

##  Approach

- **Sorting**: The input array is sorted to simplify the process of avoiding duplicates and applying the two-pointer technique.
- **Two-pointer Technique**: After fixing two elements, the remaining two are searched using two pointers.
- **Duplicate Handling**: Skips repeated elements to ensure unique results.
- **BigInt**: Used to safely handle large sums that may exceed JavaScript's safe integer limit.

---

##  Usage

### Function Signature

```js
/**
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum for the quadruplets
 * @return {number[][]} - Array of unique quadruplets
 */
var fourSum = function(nums, target) { ... }
