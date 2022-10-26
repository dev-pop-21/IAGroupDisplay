const readline = require("readline");

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function OnlyNumber(number) {
  return new Promise((resolve) => {
    resolve(!isNaN(number));
  });
}

function Loop(number) {
  for (let x = 0; x < number; x++) {
    let text = "";
    for (let y = 1; y <= number - x; y++) {
      text += " ";
    }
    text += x + 1;
    const yy = x > 8 ? x * 2 - 2 : x * 2;
    for (let y = 1; y <= yy; y++) {
      15;
      text += "*";
    }
    text += x + 1;
    console.log(text);
  }
  for (let x = number - 1; x > 0; x--) {
    let text = "";
    for (let y = 0; y <= number - x; y++) {
      text += " ";
    }
    text += x;
    const yy = x > 9 ? x * 2 - 5 : x * 2 - 3;
    for (let y = 0; y <= yy; y++) {
      text += "*";
    }
    text += x;
    console.log(text);
  }
}

function RecursiveAsyncReadLine() {
  inquirer.question("Max-Width ? ", async (max_width) => {
    const only_number = await OnlyNumber(max_width);
    console.log("OnlyNumber : ", only_number);
    if (only_number) Loop(max_width);
    RecursiveAsyncReadLine();
  });
}

RecursiveAsyncReadLine();
