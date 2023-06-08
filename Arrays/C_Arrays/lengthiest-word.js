// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.

function lengthiestWord(sentence)
{
    let wordArr = sentence.split(" ");
    let longest = wordArr[0];

    for(i = 0; i < wordArr.length; i++)
    {
        let element = wordArr[i];

        if(element.length >= longest.length)
        {
            longest = element;
        }
    }
    return longest;
}

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'