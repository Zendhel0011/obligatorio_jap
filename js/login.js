//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

document.getElementById("login").addEventListener("click", () => {
    let mail = document.getElementById("correo").value;
    let pass = document.getElementById("contrasenia").value;
    if (mail.trim() === "" || pass.trim() === ""){
        alert("Los campos no pueden estar vacios");
    }
    else if (/@/.test(mail.trim())){
        let ma_il = mail.trim().split("@")
        if (ma_il.length != 2 || !(/[.]/.test(mail.trim()))){
            alert("Correo invalido");
        }
        else if (ma_il[0].length < 1 || ma_il[1].length < 4) {
            alert("Correo demasiado corto")
        }
        else if (/[a-zA-Z]/.test(mail[0]) && /[a-zA-Z]/.test(mail[mail.length-1])){
            if (pass.trim().length < 4){
                alert("Contrasenia invalida");
            }
            else{
                if(document.getElementById("recordar").checked){
                    localStorage.setItem("mail", mail);
                }
                else{
                    sessionStorage.setItem("mail", mail);
                }
                location.href = localStorage.getItem("origen");
            }
        }
        else{
            alert("Correo invalido");
        }
    }
    else{
        alert("Correo invalido");
    }

    

    /*if (mail.trim().length >= 7 && pass.trim().length >= 7 && /[a-zA-Z]/.test(mail[0]) && /[a-zA-Z0-9]/.test(mail[mail.length-1] && /@/.exec(mail).length === 1)){

        //location.href="index.html";
        console.log(/@/.exec(mail).length)
        console.log(mail[0]);
    }*/
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }