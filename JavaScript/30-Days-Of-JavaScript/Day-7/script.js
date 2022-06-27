// PRints my Name
function myName (name){
    console.log("THe user thinks his name in this simulation is ",name)
}
myName("God")

// Prints Maximum Number
const findMax = (num1,num2,num3) =>{
    console.log(`The maximum of ${num1}, ${num2} and ${num3} is ${Math.max(num1,num2,num3)}`)
}
findMax(2342,121,324)

// Solving a quadratic equation
let roots = (function(a,b,c){
    let discriminant = Math.pow(b,2)-4*a*c
    root1 = (-b+Math.sqrt(discriminant))/(2*a)
    root2 = (-b-Math.sqrt(discriminant))/(2*a)
    console.log(`The roots of the quadratic equation ${a}x^2+${b}x+${c} are ${root1} and ${root2}`)
})
roots(1,2,1)

// Sum of Evens and Ddds
function sum(){
    oddSum = 0
    evenSum = 0
    for (x of arguments)
        if(x%2==0)    
            {
                console.log("\n",x)
                evenSum+=parseInt(x)
            }
        else    
            {
                console.log("\n",x)
                oddSum+=parseInt(x)
            }
    return [evenSum, oddSum]
}
sum_val = sum(1,2,3,4,5,6,7,8,9)
console.log(`Array : [1,2,3,4,5,6,7,8,9] \n Odd Sum : ${sum_val[1]} \n Even Sum : ${sum_val[0]} \n Total Sum : ${sum_val[0]+sum_val[1]}`)

// Returning array of colours
function randomHex(num)
{
    let alphabet = '0123456789abcdef'
    let hex_array = []
    for(let i=0;i<num;i++)
    {
        let ans = '#'
        for(let j=0;j<6;j++)
            ans+=alphabet[Math.floor(Math.random()*16)]
        hex_array.push(ans)
    }
    return hex_array
}

function randomRGB(num)
{
    rgb_string_arr = []
    for (let i=0;i<num;i++)
    {
        let rgb_array  = []
        for(let j=0;j<3;j++)
            rgb_array.push(Math.floor(Math.random()*256))
        rgb_string_arr.push(`rgb(${rgb_array[0]},${rgb_array[1]},${rgb_array[2]})`)
    }
    return rgb_string_arr
}

function generateColors(param1, num)
{
    ans = []
    for(let i=0;i<num;i++)
    {
        if(param1 === 'hexa')
            return randomHex(num)
        else if(param1 === 'rgb')
            return randomRGB(num)
        else
            alert("Give a Proper Input Ya")
    }
}

for(let i=0;i<10;i++){
    let vartype = prompt("Hexa or Rgb?").toLowerCase()
    let num = parseInt(prompt("Enter Number of Values"))
    let value = generateColors(vartype,num) 
    console.log(`DATA : \nType : ${vartype}\nValues : ${value}`)

}