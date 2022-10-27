let nums = [2, 2, 1, 3, 3];
let nums2 = [2, 2, 1, 3, 3, 4];

function check_nums(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i];
    numbers.forEach((element) => {
      if (element === temp) {
        count++;
      }
    });
    if (count === 1) {
      console.log(temp);
      count = 0;
    }
    count = 0;
  }
  return;
}

check_nums(nums);
