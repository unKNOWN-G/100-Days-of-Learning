
let firstName, lastName, country, city, age, isMarried, year;
firstName = ""
lastName = "unKNOWN"
country = "India"
city = "Vijayawada"
age = 20
isMarried = false
year = 2022

console.log("firstName : ", typeof firstName)
console.log("lastName : ", typeof lastName)
console.log("country : ",typeof country)
console.log("city : ", typeof city)
console.log("age : ",typeof age)
console.log("isMarried : ",typeof isMarried)
console.log("year : ",typeof year )

let date = new Date()

console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate(), typeof date.getDate())
console.log(Number(date.getDate()))
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime()/1000)

/*
// Area of Triangle
let base = prompt("Base: ")
let height = prompt("Height : ")
let area = 0.5*base*height
console.log(`The area of Triangle is ${area}`)

// Perimeter of a Triangle
let a = parseInt(prompt("Side A : "))
let b = parseInt(prompt("Side B : "))
let c = parseInt(prompt("Side C : "))
console.log(`The Perimeter of the Triangle is ${a+b+c}`)

// Area of Rectangle
let length =  parseInt(prompt("Length : "))
let breadth = parseInt(prompt("BReadth : "))
console.log(`The area of rectangle with length ${length} and breadth ${breadth} is ${2*(length+breadth)}`)

// Area of a Circle
let radius = parseInt(prompt("Enter Radius of circle "))
console.log(Math.PI*Math.pow(radius,2))

*/

