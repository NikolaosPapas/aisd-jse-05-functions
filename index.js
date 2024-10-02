
// Step 1: Creating a function declaration to greet the user
function greetUser() {
  console.log("Hello, User!");
}
greetUser(); // Expected output: Hello, User!

// Step 2: Creating an arrow function to greet the user
const greetUserArrow = () => {
  console.log("Hello, User!");
}
greetUserArrow(); // Expected output: Hello, User!

// Step 3: Creating a function to greet each name in an array
function greetEveryone() {
  const names = ["Alice", "Bob", "Charlie"];
  for (let i = 0; i < names.length; i++) {
    console.log("Hello, " + names[i] + "!");
  }
}
greetEveryone(); // Expected output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

// Step 4: Creating an arrow function to greet each name in an array
const greetEveryoneArrow = () => {
  const names = ["Alice", "Bob", "Charlie"];
  for (let i = 0; i < names.length; i++) {
    console.log("Hello, " + names[i] + "!");
  }
}
greetEveryoneArrow(); // Expected output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"
