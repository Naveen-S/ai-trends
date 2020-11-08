export const fromAndToDates = [...Array(20).keys()].map((i) =>
  (i + 2000).toString()
);

export const generateDataPoints = (noOfDps) => {
  var xVal = 2020 - noOfDps,
    yVal = 100;
  var dps = [];
  for (var i = 0; i < noOfDps; i++) {
    yVal = Math.abs(Math.round(Math.random() * 100));
    let month = Math.ceil(Math.random() * 12).toString();
    dps.push({ x: new Date(xVal, month, 1), y: yVal });
    xVal++;
  }
  return dps;
};

export const suits = [
  {
    id: 1,
    name: 'Armani',
    price: 70000,
    image: './images/1.jpg',
  },
  {
    id: 2,
    name: 'ReadyMade',
    price: 3000,
    image: './images/5.jpg',
  },

  {
    id: 3,
    name: 'Louis Philippe',
    price: 10000,
    image: './images/3.jpg',
  },
  {
    id: 4,
    name: 'Arrow',
    price: 60000,
    image: './images/4.jpg',
  },
  {
    id: 5,
    name: 'Van Huesen',
    price: 50000,
    image: './images/2.jpg',
  },
  {
    id: 6,
    name: 'Raymond',
    price: 7000,
    image: './images/6.jpg',
  },
];
