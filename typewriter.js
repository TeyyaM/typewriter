const sentence = "hello there from lighthouse labs";

// const typewriter = (string) => {
//   const str = string + '\n';
//   const typeletter = (char, wait) => {
//     setTimeout(() => {
//       process.stdout.write(char);
//     }, wait * 50);
//   };

//   for (let i = 0; i < str.length; i++) {
//     typeletter(str.charAt(i), i);
//   }
// };

// refactored

const typewriter = (string) => {
  const str = string + '\n';
  // prints one character at a time, each one with a setTimeout of
  // 50 seconds more than the previous (thus staggering them)
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write(str.charAt(i));
    }, i * 50);
  }
};

typewriter(sentence);