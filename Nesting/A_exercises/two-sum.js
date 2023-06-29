// Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
// as an argument. The function should return a boolean indicating whether or not there exists a pair
// of distinct elements in the array that sum to the target.

function twoSum(numbers, target)
{
    for(i = 0; i < numbers.length; i++)
    {
        let element1 = numbers[i];
        for(j = i + 1; j < numbers.length; j++)
        {
            let element2 = numbers[j];
            if(element1 + element2 === target)
            {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([6, 5, 1], 10)); // false