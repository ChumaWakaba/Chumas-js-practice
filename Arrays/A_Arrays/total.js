function total(arr)
{
    let sum = 0;
    for (i = 0; i < arr.length; i ++)
    {
        let element = arr[i];
        sum = sum + element;
    }
    return sum;
}

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0