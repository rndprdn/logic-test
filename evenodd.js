let number = [10, 5, 4, 2, 2, 3, 5, 8, 9, 4];
let arrEven = [];
let arrOdd = [];

const getEvenOdd = number => {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      arrEven.push(number[i]);
    }

    if (number[i] % 2 !== 0) {
      arrOdd.push(number[i]);
    }
  }
};

getEvenOdd(number);
