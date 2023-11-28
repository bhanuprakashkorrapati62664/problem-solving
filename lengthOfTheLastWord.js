const inp = "luffy is still joyboy";
const lst = inp.split(" ");
let res = "";
for (let i = 0; i < lst.length; i++) {
  if (lst[i] != "") {
    res = lst[i];
  }
}
console.log(res.length);
