function loggearse(){
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;
    let contador_actual = parseInt(localStorage.getItem('contador'));

    for(i = 1; i < contador_actual; i++){
        if(correo === localStorage.getItem('correo_' + i) && contrasena === localStorage.getItem('contrasena_' + i)){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login succesful',
                    showConfirmButton: false,
                    timer: 3000
                })
                document.getElementById("formulario-signin").reset();
                setTimeout(function(){window.location.href = "../Home_page/index.html"}, 4000);
                return;  
            }                        
    } document.getElementById("nocuenta").innerHTML =
    `<img src="img/info-32-orange.png" class="info-naranja" alt="orange info icon">
    <p class="p-info">We don't recognize this email address and password combination</p>`;
    return;

}

function devolverse(){
    setTimeout(function(){window.location.href = "../Home_page/index.html"}, 2000); /* cambiar por la página principal */
    return;  
}

function ircrear(){
    setTimeout(function(){window.location.href = "create.html"}, 2000); /* cambiar por la página principal */
    return;  
}

function irsignin(){
    setTimeout(function(){window.location.href = "signin.html"}, 2000); /* cambiar por la página principal */
    return;  
}

function guardarInfo() {
    let contador_data = 1;

    if (localStorage.getItem("contador") == null) {
        localStorage.setItem("contador", contador_data);
    } else {
        contador_data = localStorage.getItem("contador");
    };

    var pais = document.getElementById('pais').value;
    var idioma = document.getElementById('idioma').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    console.log(pais);
    console.log(idioma);
    console.log(nombre);
    console.log(apellido);
    console.log(correo);
    console.log(contrasena);

    if(!nombre){
        document.getElementById('nonombre').innerHTML =
        `Please enter a first name using letters only`;
        document.getElementById('nombre').className += " input-advertencia";
        document.getElementById("mi-formulario").reset();
    }
        else if (!apellido){
        document.getElementById('noapellido').innerHTML =
        `Please enter a last name using letters only`;
        document.getElementById('apellido').className += " input-advertencia";
        document.getElementById("mi-formulario").reset();    
    }
        else if(!correo){
            document.getElementById('nocorreo').innerHTML =
            `Please enter a valid email address`;
            document.getElementById('correo').className += " input-advertencia";
            document.getElementById("mi-formulario").reset();
    }
        else if (!contrasena){
            document.getElementById('nocontrasena').innerHTML =
            `Password required`;
            document.getElementById('contrasena').className += " input-advertencia";
            document.getElementById('mi-formulario').reset();
    }   else {

        for(i = 1; i < contador_data; i++){
            if (correo === localStorage.getItem("correo_" + i)){
                document.getElementById('nocorreo').innerHTML =
                `Email account already exists`;
                document.getElementById('correo').className += " input-advertencia";
                return;
            }
        }

    localStorage.setItem("pais_" + contador_data, pais);
    localStorage.setItem("idioma_" + contador_data, idioma);
    localStorage.setItem("nombre_" + contador_data, nombre);
    localStorage.setItem("apellido_" + contador_data, apellido);
    localStorage.setItem("correo_" + contador_data, correo);
    localStorage.setItem("contrasena_" + contador_data, contrasena);
    contador_data = parseInt(contador_data) + 1;
    localStorage.setItem("contador", contador_data);

    let contador_actual = parseInt(contador_data) - 1;

    document.getElementById("mi-formulario").reset();
    document.getElementById('pais').classList.remove("input-advertencia");
    document.getElementById('idioma').classList.remove("input-advertencia");
    document.getElementById('nombre').classList.remove("input-advertencia");
    document.getElementById('apellido').classList.remove("input-advertencia");
    document.getElementById('correo').classList.remove("input-advertencia");
    document.getElementById('contrasena').classList.remove("input-advertencia");
    document.getElementById('nonombre').innerHTML = '';
    document.getElementById('noapellido').innerHTML = '';
    document.getElementById('nocorreo').innerHTML = '';
    document.getElementById('nocontrasena').innerHTML = '';

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Account succesfully created',
        showConfirmButton: false,
        timer: 3000
    })

    setTimeout(function(){window.location.href = "../Tesla_order/index.html"}, 2000);  /* cambiar por la página principal */
}};
