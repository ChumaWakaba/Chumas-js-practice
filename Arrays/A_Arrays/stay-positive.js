function stayPositive(arr)
{
    let newArr = [];
    for (i = 0; i < arr.length; i ++)
    {
        let element = arr[i];
        if (element > 0)
        {
            newArr.push(element);
        }
    }
    return newArr;
}

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []