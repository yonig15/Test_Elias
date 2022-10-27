let str = "2147483647"; //(2^31)-1
let str1 = "-2147483648"; //-2^31

function My_atoi(str) {
  str = str.replace(/[^-0-9]/gi, "");
  const Newnum = Number.parseInt(str, 10);
  if (Newnum >= Math.pow(-2, 31) && Newnum <= Math.pow(2, 31) - 1) {
    console.log(Newnum);
  }
}

My_atoi(str);

//text
//let num = -42;
//console.log(num);
