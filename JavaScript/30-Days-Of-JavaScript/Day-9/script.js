let sum = 0
let arr = [1,2,3,4,5]
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

// forEach
console.log(arr.forEach(num => sum+=num))

// map
alert(arr.map(num => num**2).join(','))

//filter
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)