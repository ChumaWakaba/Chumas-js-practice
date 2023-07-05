// Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements.
// The first element of every pair is a number and the second element is a word. The function should
// return a string containing the words repeated the specified number of times. See the examples.

function spam(tdarr)
{
  let newArr = [];
    for(let i = 0; i < tdarr.length; i++)
    {
      let array = tdarr[i];  
      let word = array[0];
      let num = array[1];

      for(let j = 0; j < num; j++)
      {
        newArr.push(word);
      }
    }
    return newArr.join(" ");
}

let array1 = [
    ["hi", 3],
    ["bye", 2],
  ];
  console.log(spam(array1)); // 'hi hi hi bye bye'
  
  let array2 = [
    ["cat", 1],
    ["dog", 2],
    ["bird", 4],
  ];
  console.log(spam(array2)); // 'cat dog dog bird bird bird bird'