// Error Handling

// TRy-catch-finally block

try{
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}
finally{
    console.log('I mean i should move on right')
}

// throw - Actually interesting
// first define error and then you can use it in further places


try{
    console.log(giri)
}
catch(err){
    throw 'God objects this'
}
finally{
    console.log('Byeeee')
}
