

function validarMail() {
    const mail = document.getElementById("email").value;
    const errorMensaje = "El correo electronico no es valido."
    const requerimientoUser = document.getElementById("requerimientoMail");
    let exito = true;
    const caracterMail = "@";

    requerimientoUser.textContent = "";

    if (!mail.includes(caracterMail)) {
        requerimientoMail.textContent = errorMensaje;
        exito = false;
    }
    if(exito)
    {
        requerimientoUser.style.display = "none";
    }
    else
    {
        requerimientoUser.style.display = "block";
    }

    return exito;
}

function validarPassword() {
    const password = document.getElementById("password").value;
    const regExp = /[a-zA-Z]/g;
    const numExp = /\d/;
    const errorMensaje1 = "La contraseña debe contener 8 caracteres."
    const requerimientoPass = document.getElementById("requerimientoPass");
    let exito = true;

    requerimientoPass.innerHTML = "";

    if (password.length < 8) {
        requerimientoPass.innerHTML = errorMensaje1;
        exito = false;
    }
    if (!regExp.test(password)) {
        if(!exito) requerimientoPass.innerHTML += "<br>"; 
        
        requerimientoPass.innerHTML += "La contraseña debe contener una letra.";
        exito = false;
    }
    if (!numExp.test(password)) {
        if(!exito) requerimientoPass.innerHTML += "<br>"; 
        
        requerimientoPass.innerHTML += "La contraseña debe contener un número.";
        exito = false;
    }
    if(exito)
    {
        requerimientoPass.style.display = "none";
    }
    else
    {
        requerimientoPass.style.display = "block";
    }

    return exito;
}

function ConfirmarPassword(){
    const password = document.getElementById("password").value;
    const confirmarPass = document.getElementById("confirmar").value;
    const errorMensaje = "La contraseña debe coincidir."
    const requerimientoConfirmar = document.getElementById("requerimientoConfirmar");
    let exito = true;

    requerimientoPass.textContent = "";

    if(password != confirmarPass || password == "")
    {
        requerimientoConfirmar.textContent = errorMensaje;
        exito = false;
    }
    if(exito)
    {
        requerimientoConfirmar.style.display = "none";
    }
    else
    {
        requerimientoConfirmar.style.display = "block";
    }

    return exito;
}

function validarUser()
{
    const user = document.getElementById("username").value;
    const errorMensaje = "El usuario debe contener al menos 3 caracteres."
    const requerimientoUser = document.getElementById("requerimientoUser");
    let exito = true;

    requerimientoUser.textContent = "";

    if (user.length < 3) {
        requerimientoUser.textContent = errorMensaje;
        exito = false;
    }
    if(exito)
    {
        requerimientoUser.style.display = "none";
    }
    else
    {
        requerimientoUser.style.display = "block";
    }

    return exito;
}

function validarForm(){
    if(validarPassword() && validarMail() && validarUser() && ConfirmarPassword())
    {
        alert("Lo lograste");
    }
    else{
        alert("No lo lograste. Completa tus datos correctamente");
    }
}

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})