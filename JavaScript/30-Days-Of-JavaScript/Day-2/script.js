let challenge = "30 Days Of JavaScript"
console.log(`The length of the string \'${challenge = challenge}\' is `,challenge.length)
challenge = challenge.toUpperCase()
console.log(challenge)

challenge = challenge.toLowerCase()
console.log(challenge)

let a = challenge.substring(3,challenge.length)
console.log(a)

challenge = challenge.substring(challenge.search("days"),challenge.length)
console.log(challenge)

console.log(challenge.includes("script"))

console.log(challenge.split(" "))

let b = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(b.split(','))