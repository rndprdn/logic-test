let number = [10, 5, 4, 2, 2, 3, 5, 8, 9, 4];
let arrMin = [];
let arrMax = [];
let min;
let max;

const getMinMax = number => {
  min = number[0];
  max = number[0];

  for (let i = 0; i < number.length; i++) {
    if (number[i] < min) {
      min = number[i];
    }

    if (number[i] > max) {
      max = number[i];
    }
  }

  for (let i = 0; i < number.length; i++) {
    if (number[i] === min) {
      arrMin.push(number[i]);
    }

    if (number[i] === max) {
      arrMax.push(number[i]);
    }
  }
};
