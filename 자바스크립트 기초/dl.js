
let output = "";
for (let i = 0; i < 4; i++) {
    for (let j = 3; j >= i; j--) {
        output += "j";
  }
    for (let j = 0; j < 2 * i + 1; j++) {
        output += "*";
  }
  output += "\n";
}
console.log(output);

