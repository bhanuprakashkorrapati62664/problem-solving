const firstOccurance = (haystack, needle) => {
  if (!haystack || !needle) return -1;
  let pointer = 0;
  let needLePointer = 0;
  while (pointer < haystack.length) {
    const currentHayStackLetter = haystack[pointer + needLePointer];
    const currentNeedleLetter = needle[needLePointer];
    if (!currentNeedleLetter) return pointer;
    if (currentHayStackLetter === currentNeedleLetter) {
      needLePointer++;
    } else {
      pointer++;
      needLePointer = 0;
    }
  }
  return -1;
};
console.log(firstOccurance("sadbutsad", "sad"));

// l  e  e  t  c  o  d  e
// 0  1  2  3  4  5  6  7

// l  e  e  t  o
// 0  1  2  3  4
