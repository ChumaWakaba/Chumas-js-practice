// Write a function `maximum` that accepts an array of numbers as an argument. The function should 
// return the largest number of the array. If the array is empty, then the function should return null.

function maximum(numArr)
{
    let maxNum = 0;

    for(i = 0; i < numArr.length; i++)
    {
        let element = numArr[i];

        if(element > maxNum)
        {
            maxNum = element;
        }
    }

    if (maxNum > 0)
    {
        return maxNum;
    }
    else{
        return null;
    }
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null
console.log(maximum([37, 2, 4, 43, 4, 67, 1])); //67
