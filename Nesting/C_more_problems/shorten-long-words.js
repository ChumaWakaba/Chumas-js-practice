// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

function removeVowels(str)
{
    let vowels = "aeiou";
    let newWord = '';

    for(let i = 0; i < str.length; i++)
    {
        let char = str[i];
        if(!vowels.includes(char))
        {
            newWord = newWord + char;
        }
    }
    return newWord;
}

function shortenLongWords(sentence)
{
    let wordsArr = sentence.split(" ");
    let newArr = [];
    
    for(let i = 0; i < wordsArr.length; i++)
    {
        let word = wordsArr[i];
        if(word.length > 4)
        {
            word = removeVowels(word);
        }
        newArr.push(word);
    }
    return newArr.join(" ");
}

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'