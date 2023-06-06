// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

function makeAcronym(sentence)
{
    let newArr = sentence.split(" ");
    let newWord = '';

    for(i = 0; i < newArr.length; i++)
    {
        let word = newArr[i];
        let char = word[0];
        newWord = newWord + char;
    }
    return newWord.toUpperCase();
}



console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS