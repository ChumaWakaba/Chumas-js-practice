// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

function removeShortWords(sentence)
{
    let words = sentence.split(" ");
    let newArr = [];

    for(i = 0; i < words.length; i++)
    {
        let element = words[i];
        if(element.length >= 4)
        {
            newArr.push(element);
        }
    }
    return newArr.join(" ");
}

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'