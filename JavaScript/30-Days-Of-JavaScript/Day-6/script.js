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
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (let i=0;i<10;i++)
{
    console.log(i)
}

let i=0
while(i<10)
{
    i++;
    console.log(i)
}

do
{
    i++;
    console.log(i)
}
while(i<20)



let pattern = "#"
for(let i=0;i<6;i++)
{
    console.log(pattern)
    pattern+='#'
}


for(let i=1;i<100;i++)
{
    flag = 0
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
            flag=1
    }
    if(!flag)
        console.log(i)
}


let hex = '#'
let alphabet_val = "123456789ABCDEF"
alphabet = alphabet_val.split("")
for (let i = 0;i<6;i++)
{
    hex+= alphabet[ Math.floor(Math.random()*alphabet.length)]
}
console.log(hex)

let places = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

b= []
for(let i=0;i<places.length;i++)
{
    b.push(places[i].length)
}
console.log(b)


b= []
for(let i=0;i<places.length;i++)
{
    b.push([places[i],places[i].slice(0,3),places[i].length])
}
console.log(b)

for(let i=0;i<b.length;i++)
{
    console.log(b[i][0])
    if(b[i][0].includes("LAND"))
        console.log(b[i][0])
}
