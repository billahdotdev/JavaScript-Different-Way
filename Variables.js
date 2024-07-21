// Variables with let and const keywords (Avoid old school keyword var)

// Declaring variables with let

          let name = "Masum";
          let age = 40;

// Variables declared with let can be reassigned

          let name = "Billah";
          let age = 43;


// Block-scoped variables

          if (true) {
              let localVariable = "I'm a local variable";
              console.log(localVariable); // Output: I'm a local variable
          }

console.log(localVariable); // Error: localVar is not defined

//Error. Because I try to access it outside of the code block


// Declaring variables with const

          const PI = 3.14;
          const person = {
              name: "Billah",
              age: 30
          };

// Variables declared with const cannot be reassigned
PI = 3.14159; // Error: Assignment to constant variable

// However, properties of objects declared with const can be modified
person.age = 31; // Valid


// Block-scoped variables
if (true) {
    const localVar = "I'm a local variable";
    console.log(localVar); // Output: I'm a local variable
}
console.log(localVar); // Error: localVar is not defined


/* 
let and const 
both are Block-scoped 
*/  

