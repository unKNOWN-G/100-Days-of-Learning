// Destructuring and Spreading

// Destructuring - unpacing an array or objects and assign to disctinct values
const number = [1,2,3]
let [x,y,z] = number
console.log(`${x},${y},${z}`)

/* Destructuring OBject

When we destructure the name of the variable we use to destructure should be
exactly the same as the key or property of the object. See the example below.
*/

const rectangle_0 = {
width: 20,
height: 10,
area: 200
}
let { width, height, area, perimeter } = rectangle_0

console.log(width, height, area, perimeter)

// Renaming during structuring
const rectangle_1 = {
    width: 20,
    height: 10,
    area: 200
  }
let { width: w, height: h, area: a, perimeter: p } = rectangle_1

console.log(w, h, a, p)

/* Spread or Rest operator

When we destructure an array we use the spread 
operator(...) to get the rest elements as array. 
In addition to that we use spread operator to spread 
array elements to another array.
*/

const numbers  = Array(10).keys()
let [num1,num2,num3, ...rest] = numbers
console.log(rest)


// Exercises Data
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

// Excersices : Level 1

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries

// Destructure the rectangle object by its properties or keys.
let {width:wid, height:hei, area:are, perimeter:per } = rectangle
console.log(wid ,hei, are, per)

// Exercises : Level 2

//Iterate through the users array and get all the keys of the object using destructuring
for (let a of users){
    console.log(Object.keys(a))
}

//Find the persons who have less than two skills
for (let a of users){
    if(a.skills.length<2)
    {
        console.log(a.name)
    }
}

// Exercises : Level 3

function converArrayToObject (info){
    var name = info[0]
    var skills = info[1]
    var scores = info[2]
  
    return {name,skills,scores}
  }
  
  converted = []
  for (a of students)
    converted.push(converArrayToObject(a))
  console.log(converted, typeof converted)