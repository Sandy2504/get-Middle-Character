function getMiddle(s) {
  const middleCharacter = Math.floor(s.length / 2);

  //if word.length is even / return 2middle character as string
  if (s.length % 2 === 0) {
    //return 2middle charakter of word
    return s.slice(middleCharacter - 1, middleCharacter + 1);

    //than else word.length is odd / return middle character as string
  } else {
    //return middle charakter of word
    return s.charAt(middleCharacter);
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
