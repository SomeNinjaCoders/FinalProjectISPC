function iniciaSesion() {
    const socio = document.querySelector("#socio")
    const usulos = []


    socio.addEventListener("submit", (event) => {

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
        else {
            window.location.href = "index.html"
        }

    })
}




function formulario() {
    const socio = document.getElementById("agregar-socio")
    const campos = document.querySelectorAll("input")
    const usuarios = []





    socio.addEventListener("submit", (event) => {

        event.preventDefault()

        usuarios.push({
            nombre: socio.nombre.value,
            apellido: socio.apellido.value,
            email: socio.email.value,
            contrasena: socio.contrasena.value,
            contrasenaver: socio.contrasenaver.value

        })


        if (nombre.value === "") {
            Swal.fire({
                title: 'Por favor complete el nombre',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            }) 

        }  else if (apellido.value === "") {
            Swal.fire({
                title: 'Por favor complete el apellido',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            }) 

        }  else if (email.value === "" ) {
            Swal.fire({
                title: 'Por favor complete el email',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            }) 

        } else if (contrasena.value === "" ) {
            Swal.fire({
                title: 'Por favor complete la contraseña',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            }) 

        } else if (contrasena.value !== contrasenaver.value) {
            Swal.fire({
                title: 'Las contraseñas no coinciden',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            })
        } else {
            window.location.href = "login.html"
        }

    })
}

function orden() {
    if (window.location.href.includes("login.html")) {

        iniciaSesion();
    } else if (window.location.href.includes("newsocio.html")) {

        formulario();
    } else {
        console.log("No estás en paginas de registro");
    }
}

orden();
