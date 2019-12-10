const number = [10, 5, 4, 2, 2, 3, 5, 8, 9, 4];
let countTerkecil = [];
let countTerbesar = [];
let terkecil;
let terbesar;

const getMinMax = number => {
  terkecil = number[0];
  terbesar = number[0];

  for (let i = 0; i < number.length; i++) {
    if (number[i] < terkecil) {
      terkecil = number[i];
    }

    if (number[i] > terbesar) {
      terbesar = number[i];
    }
  }

  for (let i = 0; i < number.length; i++) {
    if (number[i] === terkecil) {
      countTerkecil.push(number[i]);
    }

    if (number[i] === terbesar) {
      countTerbesar.push(number[i]);
    }
  }
};

getMinMax(number);
