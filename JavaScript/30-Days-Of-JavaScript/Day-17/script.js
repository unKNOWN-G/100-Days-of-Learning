// Web Storage
/*
2 types of storages
localStorage
sessionStorage
localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

Some use case of Web Storages are

store data temporarily
1. saving products that the user places in his shopping cart
2. data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
3. can be used offline completely using localStorage
4. Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
5. can be used for user authentication method

methods with local storage

localStorge
localStorage.setItem('key','value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.key(index)
localStorage.clear()
*/

// Exercises are needed to be done on Web Browsers

const personAccount = {
    firstName : "unKNOWN",
    lastName : "G",
    incomes : [10000,100],
    expenses : [50,250],

    totalIncome(){
        sum = 0
        this.incomes.forEach(Element=>{
            sum+=Element
        })
        return sum;
    },
    totalExpense(){
        sum = 0
        this.expenses.forEach(Element=>{
            sum+=Element
        })
        return sum;
    },
    addIncome(val){
        this.incomes.push(val)
    },
    addExpense(val){
        this.expenses.push(val)
    },
    acountBalance(){
        return this.totalIncome()-this.totalExpense()
    }
}

let string_obj = JSON.stringify(personAccount,undefined,4)
localStorage.setItem('myAccountInfo',string_obj)
let info = localStorage.getItem('myAccountInfo')
console.log(JSON.parse(info,undefined))