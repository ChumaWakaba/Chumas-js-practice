// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

function alternatingCaps(sentence)
{
    let words = sentence.split(" ");
    let newWords = [];

    for(i = 0; i < words.length; i++)
    {
        let element = words[i];
        if (i % 2 ==! 0)
        {
            element= element.toUpperCase();
            newWords.push(element);
        }
        else{
            element= element.toLowerCase();
            newWords.push(element);
        }
    }
    return newWords.join(" ");
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'