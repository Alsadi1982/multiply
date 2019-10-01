module.exports = function multiply(first, second) {
  let first_arr = first.split("");
  let second_arr = second.split("");
  let big_arr = [];
  let big_arr_two = [];
  let big_result = "";
  let magic_num = 0;
  for (let i = first_arr.length - 1; i >= 0; i--) {
    let string = "";
    magic_num = 0;
    let num_first = parseInt(first_arr[i]);
    for (let j = second_arr.length - 1; j >= 0; j--) {
      let simply_arr = [];
      let num_second = parseInt(second_arr[j]);
      let result = String(num_first * num_second + magic_num);
      if (result.length === 2) {
        simply_arr = result.split("");
        // console.log(simply_arr);
        magic_num = parseInt(simply_arr[0]);
        string = simply_arr[1] + string;
      } else {
        magic_num = 0;
        string = result + string;
      }
      if (j === 0 && magic_num !== 0) {
        string = magic_num + string;
      }
    }
    // console.log(string);
    big_arr.push(string);
  }

  if (big_arr.length === 1){
    return big_arr[0];
  }

  console.log(big_arr);

  // lets sum!

  for (let i = 0; i < big_arr.length; i++) {
    let arr1 = null;
    let string = "";
    magic_num = 0;
    if (i === 0) {
      arr1 = big_arr[i].split("");
      big_result = arr1.pop() + big_result;
      big_arr_two.push(arr1.join(""));// big_arr[i] = arr1.join("");
    } else {
      arr1 = big_arr_two[i - 1].split("");
      let arr2 = big_arr[i].split("");
      for (let j = arr2.length - 1, k = arr1.length - 1; j >= 0; j--, k--) {
        let arr_simply = [];
        let result = null;
        let second_num = parseInt(arr2[j]);
        if (k >= 0) {
          let first_num = parseInt(arr1[k]);
          result = String(first_num + second_num + magic_num);
          console.log("result = " + result);
          if (result.length === 2) {
            arr_simply = result.split("");
            magic_num = parseInt(arr_simply[0]);
            string = arr_simply[1] + string;
          } else {
            magic_num = 0;
            string = result + string;
          }
        } else {
          string = String(second_num + magic_num) + string;
        }
      }
      if (i === big_arr.length - 1) {
        big_result = string + big_result;
      } else {
        arr1 = string.split("");
        console.log(arr1);
        big_result = arr1.pop() + big_result;
        big_arr_two.push(arr1.join(""));// big_arr[i] = arr1.join("");
      }
    }
  }

  console.log(big_arr_two);

  return big_result;
}
