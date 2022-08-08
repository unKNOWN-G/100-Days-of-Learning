
let week = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat" ,"Sun"]
function everyMin(){
    let date = new Date()
    text = ""+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+", "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
    const time_update = document.getElementsByClassName('dateAndTime')
    // console.log(time_update[0].textContent)
    time_update[0].textContent = text
    const para = document.querySelector(".year")
    para.style.color = randomHex()
    const para1 = document.getElementsByTagName('li')
    if(para1.length!=0){
        for(item of para1){
            let text = item.textContent.toLowerCase()
            if(text.includes("done"))
            {
                item.style.color = 'green'
            }
            else if (text.includes("ongoing")){
                item.style.color = 'purple'
            }
        }
}

}

function randomHex(){
    let hex_val = "#"
    let alpha = '0123456789abcDEF'
    for(let i=0;i<6;i++){
        hex_val+=alpha[Math.floor(Math.random()*16)]
    }
    return hex_val
}



setInterval(everyMin,1000)