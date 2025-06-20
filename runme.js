// Node app for testing
// For demo purposes

let exitstate = 0

console.log("Welcome to Python")
console.log("This file is running with GitHub Actions")

if ( process.env.GUESS === "42" ) {
  console.log("OS GUESS was correct")
} else if ( ! process.env.GUESS ) {
  console.log("Error variable was not set")
  exitstate = 1
} else {
  console.log("OS GUESS was wrong")
    exitstate = 1
}

console.log("End of program")
process.exit(exitstate)
