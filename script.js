

function validarMail() {
    const caracterMail = "@";
    let email = document.getElementById("email").value;
    if (email.includes(caracterMail)) {

    }


}



function validarPassword() {
    const password = document.getElementById("password").value;
    const regExp = /[a-zA-Z]/g;
    const errorMensaje1 = "La contraseña debe contener al menos 8 caracteres."
    const requerimiento1Pass = document.getElementById("requerimiento1Pass");
    let exito = true;

    requerimiento1Pass.innerHTML = "";

    if (password.length < 8 && password.length !== 0) {
        requerimiento1Pass.innerHTML = errorMensaje1;
        exito = false;
    }
    if (!regExp.test(password)) {
        if(!exito) requerimiento1Pass.innerHTML += "<br>"; 
        
        requerimiento1Pass.innerHTML += "La contraseña debe contener al menos una letra";
        exito = false;
    }
    if(exito)
    {
        requerimiento1Pass.style.display = "none";
    }
    else
    {
        requerimiento1Pass.style.display = "block";
    }



}

document.getElementById("email").onchange = validarMail();



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