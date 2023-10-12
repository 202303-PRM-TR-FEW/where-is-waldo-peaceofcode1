const example = [
  ["B", "B", "B"],
  ["B", "B", "B"],
  ["B", "J", "B"]
];

const jafar = [
["c", "c", "c", "c"],
["c", "c", "c", "J"]
];

const bino = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "J", "O"],
  ["O", "O", "O", "O"]
];


const whereIsWaldo = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "J") {
        return [i, j];
      }
    }
  }
}

console.log(whereIsWaldo(example));
console.log(whereIsWaldo(jafar));
console.log(whereIsWaldo(bino));