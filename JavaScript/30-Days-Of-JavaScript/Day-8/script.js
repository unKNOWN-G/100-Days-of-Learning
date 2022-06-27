const dog = {}
console.log(dog)
dog.name = "Rocky"
dog.legs = 4
dog.color = "Brown"
dog.age = 10
dog.bark = function (){
    return "woof woof"
}
console.log(dog)

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function generateHex(){
    alphabet = '0123456789abcdef'
    hex = ''
    for(let i=0;i<6;i++)
        hex+=alphabet[Math.floor(Math.random()*16)]
    return hex
}

function user_reg (username, email, password){
    let temp_id = generateHex()
    if(temp_id in forAll)
    const id = {
        _id: ,
        username: username,
        email:email,
        password:password,
        createdAt: Date(),
        isLoggedIn: false
    }
    return id;
}

while(1)
{
    create_account = prompt("Do you want to create new account. Enter Yes to Confirm").toLowerCase()
    if(create_account==='yes')
    {
        let username = prompt("Username")
        let email = prompt("Email")
        let password = prompt("Password")
        user = user_reg (username, email, password)
        users.push(user)
        console.log(users)
    }
}