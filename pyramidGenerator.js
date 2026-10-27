function pyramid(pattern, rows, vertex) {
  let result = "\n";
  if (!vertex) {
    for (let i = 1; i <= rows; i++) {
      const spaces = " ".repeat(rows - i);
      const block = pattern.repeat(2 * i - 1);
      result += `${spaces}${block}\n`;
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      const spaces = " ".repeat(rows - i);
      const block = pattern.repeat(2 * i - 1);
      result += `${spaces}${block}\n`;
    }
  }
  return result;
}

/*Tests*/

console.log(pyramid("*", 4, false));
console.log(pyramid("p", 5, true));
