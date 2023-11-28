const longestOfLastWord = (s) => {
  const lst = s.split(" ");
  let res = "";
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] != "") {
      res = lst[i];
    }
  }
  return res.length;
};

console.log(longestOfLastWord("luffy is still joyboy"));
