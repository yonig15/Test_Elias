let str = "A man, a plan, a canal: Panama";
let str1 = "race a car";

function BuildStr(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi, "");
  return str;
}

function check_palindrome(str) {
  let FixStr = BuildStr(str);
  let strRev = FixStr.split("").reverse().join("");
  return console.log(FixStr === strRev ? true : false);
}

check_palindrome(str);
check_palindrome(str1);
