// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

function removeVowels(str)
{
    let newWord = "";
    let vowels = "aeiou";
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

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr