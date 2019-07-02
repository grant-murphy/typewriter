//VERTICAL OUTPUT

// const sentence = "Hello there, my name is Grant";

// for(const char in sentence) {
//   setTimeout(() => {
//   console.log(sentence[char]);
//   }, 100 + char * 100);
// };

//HORIZONTAL OUTPUT

// const sentence = "Hello there, my name is Grant";

// for(const char in sentence) {
  
//   setTimeout(() => {
//   process.stdout.write(sentence[char])
//   }, 100 + char * 100);

// };

//HORIZONTAL OUTPUT using '\n'

const sentence = "Hello there, my name is Grant";

let delay = 100

for(const char in sentence) {
  
  setTimeout(() => {
  process.stdout.write(sentence[char])
  }, delay);
  delay += 100;
};

setTimeout(() => {
  process.stdout.write('\n')
  }, delay);

