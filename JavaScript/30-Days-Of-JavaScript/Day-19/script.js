// Closure
// Function inside a function and the subfunction uses the variables of the main function. This is called Closure

function outer(){
    let count = 0
    function increment (){
        count++
        return count;
    }
    function decrement (){
        count--;
        return count
    }
    function bonus(){
        count+=10;
        return count
    }
    return increment()+decrement()+bonus()
}

console.log(outer())
