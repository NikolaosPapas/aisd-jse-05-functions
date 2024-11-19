// Step 4: Creating an arrow function to greet each name in an array
const greetEveryoneArrow = () => {
    const names = ["Alice", "Bob", "Charlie"];
    for (let i = 0; i < names.length; i++) {
      console.log("Hello, " + names[i] + "!");
    }
  }
  greetEveryoneArrow(); // Expected output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"


  function printFavoriteColors(colors) {
    for (let color of colors) {
        console.log(`I like ${color}!`);
    }
}

// Example usage:
printFavoriteColors(["Red", "royal blue", "british racing green"]);


function describeAnimals(animals) {
    for (let animal of animals) {
        console.log(`The ${animal} is amazing!`);
    }
}

// Example usage:
describeAnimals(["tiger", "elephant", "dolphin"]);
