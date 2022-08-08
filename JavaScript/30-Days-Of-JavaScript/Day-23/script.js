function loader(){
    const data = document.querySelector('.description')
    console.log(data.textContent)
    data.innerHTML = 'I am God'
    console.log('loaded')
}

function isprime(number){
    let isPrime = true;
    number = parseInt(number)
    for (let i = 2; i < number; i++) {
        // console.log(number, typeof number, i, typeof i)
    if (number % i == 0) {
        isPrime = false;
        break;
    }}
    
    return isPrime
}
function colorDecider(x){
    x = parseInt(x)
    if(isprime(x)){
        return "orange"
    }
    else if(x%2==0){
        return "#3CCF4E"
    }
    else{
        return "yellow"
    }
}
function remove(elem){
    while(elem.hasChildNodes()){
        console.log(elem.firstChild)
        elem.removeChild(elem.firstChild);
    }
    
}
function generate(){
    let num = document.getElementById('quantity').value
    let row_count = parseInt(num)/10+1
    const elem = document.getElementById('numTable')
        if(elem.hasChildNodes()){
            remove(elem)
        }
    for(let i=0;i<row_count;i++){
        let row = document.createElement('tr')
        row.className = "row"
        for(let j = 0; j<10 && i*10+j<=num;j++){
            let col = document.createElement('td')
            col.className = "col"
            col.textContent = i*10+j
            col.style.backgroundColor = colorDecider(i*6+j)
            row.appendChild(col)
        }
        elem.appendChild(row)
    }

}