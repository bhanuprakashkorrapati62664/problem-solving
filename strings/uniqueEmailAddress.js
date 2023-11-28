const numUniqueEmails = (emails) => {
  const resList = [];
  for (let i = 0; i < emails.length; i++) {
    let splitWithSpecials = emails[i].split("@");
    let splitWithPeriods = splitWithSpecials[0].split("+");
    let splitWithPlus = splitWithPeriods[0].split(".");
    const res = splitWithPlus.join("") + "@" + splitWithSpecials[1];
    resList.push(res);
  }
  let uniqueEmails = new Set(resList);
  let uniqueEmailsCount = uniqueEmails.size;
  return uniqueEmailsCount;
};
console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
