const sentence = "hello there from lighthouse labs";
let durationCount = 50;

for (const letter of sentence) {
  // console.log("letter: ", letter);
  if (letter) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, durationCount);
  durationCount += 50
}

};
setTimeout(() => {
  console.log();
}, durationCount + 1);