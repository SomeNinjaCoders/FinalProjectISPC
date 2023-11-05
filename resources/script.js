function iniciaSesion(){
    const socio = document.querySelector("#socio")
    const usulos = []
    

    socio.addEventListener("submit",(event) => {
        
        event.preventDefault()

        usulos.push({
            
            email: socio.emailuser.value,
            contrasena: socio.contrasenauser.value

        })

        if (!emailuser.value || !contrasenauser.value) {
            Swal.fire({
                title: 'Por favor complete todos los campos obligatorios',
                confirmButtonText: "Entendido",
                confirmButtonColor: 'rgba(159, 194, 204, 1)',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            })
        
            }
        else{
            window.location.href = "index.html"
        }

    })
}



function formulario(){
    const socio = document.querySelector("#agregar-socio")
    const usuarios = []
    

    socio.addEventListener("submit",(event) => {
        
        event.preventDefault()

        usuarios.push({
            nombre: socio.nombre.value,
            apellido: socio.apellido.value,
            email: socio.email.value,
            contrasena: socio.contrasena.value,
            contrasenaver: socio.contrasenaver.value

        })

        if (!nombre.value || !apellido.value || !email.value || !contrasena.value || !contrasena.value ) {
            Swal.fire({
                title: 'Por favor complete todos los campos obligatorios',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            })
        
            } 
        else if (contrasena.value !== contrasenaver.value){
            Swal.fire({
                title: 'Las contraseñas no coinciden',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            })
        }
        
        else{
            window.location.href = "login.html"
        }

    })
}

formulario();
iniciaSesion();