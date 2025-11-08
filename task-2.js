const genMultiplicationTable = (number) => {
  let tableRow = [];

  for (let i = 1; i <= number; i++) {
    let row = [];
    for (let j = 1; j <= number; j++) {
      row.push(i * j);
    }
    tableRow.push(row);
  }

  console.log(tableRow);
};

genMultiplicationTable(5);
