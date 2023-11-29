const firstOccurance = (heystack, needle) => {
  let occurance = null;
  let count = 0;
  for (let i = 0; i < heystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (heystack[i] === needle[j] && heystack[i] === needle[0]) {
        occurance = i;
      }
      if (heystack[i] === needle[j]) {
        i += 1;
        count++;
      }
    }
    if (count === needle.length) {
      break;
    }
  }
  if (occurance !== null) {
    return occurance;
  } else {
    return -1;
  }
};
console.log(firstOccurance("leetcode", "leeto"));
