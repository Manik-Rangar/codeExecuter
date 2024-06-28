const vm = require('vm');

// JavaScript code as a string
// const codeString = `
// const a = 5;
// let string = "";
// for(let i = 0; i < 5; i++) {
//   string += i;
// }
// console.log(string);
// string
// `;

const codeString = `//JavaScript program to swap two variables
// const fs = require('fs')
// fetch()
function myGreeting() {
  console.log('Hello, World!');
}
const myTimeout = setTimeout(myGreeting, 5000);

function myStopFunction() {
  clearTimeout(myTimeout);
}
`

// Function to execute code in a sandboxed environment
const execute = (code) => {
    // Create a new sandbox context
    const sandbox = {
        setTimeout:setTimeout,
        clearTimeout:clearTimeout,
        fetch: () => { throw new Error('External requests are blocked'); },
        require: () => { throw new Error('Importing libraries is blocked'); },
        import: () => { throw new Error('Importing libraries is blocked'); },
        console: console
    };


    const script = new vm.Script(code);
    const context = new vm.createContext(sandbox);
    const result = script.runInContext(context);

    return result;
}

// Execute the code and get the output
exports.executeCode = () => {

    try {
        const output = execute(codeString);
        console.log('Output:', output);
        
    } catch (error) {
        console.error('Error:', error.message);
       
    }
}
