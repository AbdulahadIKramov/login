
function _id(name){
    return document.getElementById(name)
}

function _class(name){
    return document.getElementsByClassName(name)
}

_class("toggle_password")[0].addEventListener('click', ()=>{
    _class("toggle_password")[0].classList.toggle('active')

    if(_id("password_field").getAttribute("type") == "password"){
        _id("password_field").setAttribute("type", "text");
    }else{
        _id("password_field").setAttribute("type", "password")
    }
})

_id("password_field").addEventListener("focus", ()=>{
    _class("password_policies")[0].classList.add("active")
})

_id("password_field").addEventListener("blur", ()=>{
    _class("password_policies")[0].classList.remove("active")
})

_id("password_field").addEventListener("keyup", ()=>{
    let password = _id("password_field").value;

    if(/[A-Z]/.test(password)){
        _class("policy_uppercase")[0].classList.add("active")
    }else{
        _class("policy_uppercase")[0].classList.remove("active")
    }

    if(/[0-9]/.test(password)){
        _class("policy_number")[0].classList.add("active")
    }else{
        _class("policy_number")[0].classList.remove("active")
    }
    
    if(/[a-z]/.test(password)){
        _class("policy_lover")[0].classList.add("active")
    }else{
        _class("policy_lover")[0].classList.remove("active")
    }

    if(password.length > 7){
        _class("policy_length")[0].classList.add("active")
    }else{
        _class("policy_length")[0].classList.remove("active")
    }

})