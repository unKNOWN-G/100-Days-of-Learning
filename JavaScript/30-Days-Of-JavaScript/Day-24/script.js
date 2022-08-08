function validate(elem,regex_pattern){

    let name = elem.getElementsByTagName('input')[0]
    let value = name.value
    

    if(value.match(regex_pattern))
    {
        name.style.border = '2px green solid'
        let para = elem.getElementsByTagName('p')[0]
        para.textContent = ""
    }
    else{
        name.style.border = '2px red solid'
        let para = elem.getElementsByTagName('p')[0]
        para.textContent = "Invalid Text"
        para.style.color = 'red'
    }
    return value.match(regex_pattern)
}

function firstNameValidate(){
    let elem = document.querySelector("#firstName")
    regex_pattern = /^([^0-9]*)$/g  
    return validate(elem,regex_pattern)
}

function lastNameValidate(){
    let elem = document.querySelector("#lastName")
    regex_pattern = /^([^0-9]*)$/g  
    return validate(elem,regex_pattern)
}

function emailValidate(){
    let elem = document.querySelector("#email")
    regex_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return validate(elem,regex_pattern)
}
function passwordValidate(){
    let elem = document.querySelector("#password")
    regex_pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d@$!%*?&]{8,10}/gi
    return validate(elem,regex_pattern)
}

function bioValidate(){
    
}

function submitValidate(){
    if(firstNameValidate()&&lastNameValidate()&&emailValidate()&&passwordValidate()){
        console.log("Success")
    }
    else{
        console.log("Not Success")
    }
}