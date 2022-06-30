// COSOLE EXCERCISE 
// Time
// By ending it at sm,ewhere with same id 'start-id' you will ned the calclusation of time and find the time elapsed 
console.time('start-id')
// console.log()
console.log('This is %d %s',1,'line')

// Adding Css
console.log('%cThis is%c %d %s','color:green','color:red',2,'line')

//Warn
console.warn('This is Warning')

// Error
console.error('Error 404')

// Table
 let a = [1,2,3,4,5]
console.table(a)

// const users = [
//     {
//       name: 'Asabeneh',
//       title: 'Programmer',
//       country: 'Finland',
//       city: 'Helsinki',
//       age: 250
//     },
//     {
//       name: 'Eyob',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Asab',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Matias',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
//   ]
//   console.table(users)

  // End time
  console.timeEnd('start-id')

// info
console.info('30 Days Of JavaScript challenge is trending on Github')

// assert -  helps to record failed situations
console.assert(4<3)

// Group
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// count

function count () {
    console.count('COunts')
}
count()
count()
count()

// clear
console.clear()

// Exercises
// Level : 1

console.table(countries)
console.group()
console.table(countries)
console.table(users)
console.groupEnd()

// Level 2
console.assert(10 > 2 * 10)
console.warn('Warning')
console.error('Error')

// Level 3

console.group('Time')
i = 0 
console.time('for')
for(i=0;i<10;i++)
{
    // console.count('for')
}
console.timeEnd('for')

i = 0 
console.time('while')
while(i<10)
{
    // console.count('while')
    i+=1;
}
console.timeEnd('while')

A = Array(10)
console.time('for of')
for(i of A)
{
    // console.count('for of')
}
console.timeEnd('for of')

i = 0 
console.time('for-Each')
A.forEach(element => {
    // console.count('for-Each')
});
console.timeEnd('for-Each')
console.groupEnd('Time')