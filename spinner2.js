let charSequenceArr = ["|","/","-","|","/","-","\\"];
let inputStr = character=>`\r${character}   `;

let timeInterval = 100;
for (const char of charSequenceArr) {
  setTimeout(() => {
    process.stdout.write(inputStr(char));
  }, timeInterval);
  timeInterval += 200;
}