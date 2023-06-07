// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

function wordCount(sentence, targetWords)
{
    let wordsArr = sentence.split(" ");
    count = 0;

    for(i = 0; i < wordsArr.length; i++)
    {
        let element = wordsArr[i];

        for(j = 0; j < targetWords.length; j++)
        {
            if(element === targetWords[j])
            {
                count++;
            }
        }
    }
    return count;

}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3
console.log(wordCount("let's go waterboarding tomorrow and the day after that", ["go", "tomorrow", "the", "after"])); // 4