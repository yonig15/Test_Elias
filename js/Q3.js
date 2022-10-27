let str = "2147483647"; //(2^31)-1
let str1 = "-2147483648"; //-2^31

function My_atoi(StrNum) {
  StrNum = StrNum.replace(/[^-0-9]/gi, "");
  let Newnum = Number.parseInt(StrNum, 10);
  if (Newnum >= Math.pow(-2, 31) && Newnum <= Math.pow(2, 31) - 1) {
    return console.log(Newnum);
  } else if (Newnum <= Math.pow(-2, 31)) {
    Newnum = Math.pow(-2, 31);
    return console.log(Newnum);
  } else {
    Newnum = Math.pow(2, 31) - 1;
    return console.log(Newnum);
  }
}

My_atoi(str);

//text
//let num = -42;
//console.log(num);
