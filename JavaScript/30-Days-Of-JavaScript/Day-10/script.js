// Sets and Maps

//Empty Set
const companies = new Set()

//Add Elements to a Set
companies.add('Google')
companies.add('Netflix')

// Delete Elements from a Set
companies.delete('GOogle')

// Check for an element -> BOol REturn
companies.has('Netflix')

// Clear a Set
companies.clear()

// Union of 2 sets
let x = [1,2,3,4]
let y = [4,5,6]
let c = [...x,...y]
let Y = new Set(y)
let c_union = new Set(c)

// Intersection of 2 sets
let c_intersection = x.filter((num) => Y.has(num))

// Difference of 2 Sets
let c_diff =  x.filter((num)=>!Y.has(num))
alert(c_diff.join(', '))

// Map

//Empty Map
const map = new Map()
map.set('one',1)
map.set('two',2)

// Get a value from map
alert(map.get('two'))

// Checking key in a map
alert(map.has('one'))

// Exercises
// Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const A = new Set(a)
const B = new Set(b)
const countries = ['Finland', 'Sweden', 'Norway']
const set = new Set()
for(let i=0;i<10;i++)
    set.add(i)
set.delete(5)
console.log(set)
set.clear()

const country_map = new Map()
for (country of countries)
{
    country_map.set(country,country.length)
}
console.log(country_map)
const union = new Set([...a,...b])
console.log(`The union of ${a} and ${b} `,union)
const intersection = a.filter((num)=>B.has(num))
console.log(`The union of ${a} and ${b} `,intersection)