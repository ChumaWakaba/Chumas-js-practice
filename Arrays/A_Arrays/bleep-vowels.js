function bleepVowels(str)
{
    let newChar ="";
    for (i = 0; i < str.length; i++)
    {
        let element = str[i];
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u")
        {
            newChar = newChar + "*";
        }
        else {
            newChar = newChar + element;
        }
    }
    return newChar;
   
}

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'