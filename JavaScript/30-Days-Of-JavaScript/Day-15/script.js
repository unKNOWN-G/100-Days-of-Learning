// Class 

// Creating a Class + Constructor + Method + getter+  Setter

class Person{
    constructor(name,age,occupation,salary,mobile){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.salary = salary;
        this.mobile = mobile;
        this.planet = 'earth'
    }
    get info(){
        console.log("%s's age is %d. He is currently a %s and earns a salary of %s\n%cIf you are interested to contact him. Reach him out at %c%s",this.name,this.age,this.occupation,this.salary,'color:green','color:red',this.mobile)
    }

    set increment(percentage){
        this.salary = parseFloat(this.salary,2)*(1+percentage/100).toString()
    }
}

// Inheritance  + Super + Overriding
class Cisconian extends Person{
    constructor(name,age,occupation,salary,mobile,employee_id){
        super(name,age,occupation,salary,mobile)
        this.employee_id = employee_id;
    }
    get info(){
        console.log('His Employee Id is ',this.employee_id)
    }
}
person1  = new Person('Gowtham', 25,'Software Engineer','100000','9766731841')
person2 = new Cisconian('Gowtham', 25,'Software Engineer','100000','9766731841',1)
person2.info

// Exxercise LEvel 1

class Animal{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age
        this.color = color
        this.legs = legs
    }

    get intro(){
        console.log('Hey Guys!\nI am %s and my age is %d. I look %s and i have %d legs',this.name,this.age,this.color,this.legs)
    }
}

class Dog extends Animal{
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs)
        this.breed = breed;
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs, bathed){
        super(name, age, color, legs)
        this.bathed = bathed;
    }

    get intro(){
        console.log('I am lazy :)')
    }
}

const dog = new Dog('Rocky',5,'Golden', 4, 'labrador')
const cat = new Cat('Sushy',1,'White', 4, 'yes')

dog.intro
cat.intro

class stats{
    constructor(array){
        this.array = array
    }
    print(){
        return this.array
    }
    count(){
        return this.array.length
    }
    sum(){
        let sum_val = 0
        for(let i of this.array){
            sum_val += i
        }
        return sum_val;
    }
    min(){
        return Math.min(...this.array)
    }
    max(){
        return Math.max(...this.array)
    }
    range(){
        return this.max()-this.min()
    }
    mean(){
        return this.sum()/this.count();
    }
    median(){
        let sorted = this.array.sort()
        return sorted[parseInt(this.count()/2)]
    }
    mode(){
        const freq_dict = {}
        for(let i of this.array){
            if(i in freq_dict){
                freq_dict[i]+=1
            }
            else
                freq_dict[i]=1
        }
        console.log(freq_dict)
        let sorted_keys = Object.keys(freq_dict).sort(function(a,b){
            return freq_dict[b]-freq_dict[a]
        })
        let val = sorted_keys[0].toString()
        let ans[val] = freq_dict[val]
        return ans
    }

}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

statistics  = new stats(ages)
console.log('print:',statistics.print())
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() )// 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.mode()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]