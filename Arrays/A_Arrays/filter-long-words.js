function filterLongWords(strArr)
{
    let newArr = [];

    for (i = 0; i < strArr.length; i++)
    {
        let element = strArr[i]; 
        if(element.length < 5)
        {
            newArr.push(element);
        }
    }

    return newArr;
}

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']